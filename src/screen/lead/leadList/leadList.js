import React, {Component} from 'react';
import {Linking, View, Text,Image, ToastAndroid, AsyncStorage, FlatList} from 'react-native';
import {Icon, Fab, Button} from 'native-base';
import {StackActions,NavigationActions} from 'react-navigation';

import {_getValueById} from '../../../helper/helper.js';
import MainBody from '../../../component/mainBody/mainBody.js';
import Profile from '../../../component/profile/profile.js';
import ThumbImage from '../../../component/thumbImage/thumbimage.js';
import SwipeList from '../../../component/swipeList/swipelist.js';
import {defaultColor} from './leadList.style.js';

import {ds_LeadListData, ds_leadNew, ds_Lead, ds_StatusFilter} from '../../../helper/data.js';
import { getAgents, filterGetAgentByCode, getAgent, updateAgent } from '../../../services/webservice/agentService.js';
import { statusDb } from '../../../model/realm/statusDb.js';
import { agentDb } from '../../../model/realm/agentDb.js';
export default class LeadList extends Component{
    static navigationOptions = {
        header:null
    }
    
    constructor(props){
        super(props);

        this.data = []
        this.state=({
            data: [],
            filter: '',
            search: '',
            active:'false'
        });

        this._searchFilterFunction = this._searchFilterFunction.bind(this);
    }

    loadData(){
        let agts = agentDb.getAll()
        console.warn("agts length : "+agts.length)
        if(agts.length>0){
            console.warn('push db to server')
            for(let i=0;i<agts.length;i++){
                updateAgent(global.token,agts[i]).then((res)=>{
                    agentDb.delete(agts[i].id)
                    if(agentDb.getAll().length<=0){
                        this.loadData()
                    }
                })
            }
        }else{

            getAgents(global.token).then((res) => {
                this.data = filterGetAgentByCode(res,global.user.usrAgentCode)        

                this.setState({
                data:this.data
                })
                
                if(this.state.search){
                    this._searchFilterFunction(this.state.search)
                }else{
                    this._updateStatusFilter(this.state.filter)
                }
            }); 

        }
    }

    componentWillMount(){
        this._subscribe = this.props.navigation.addListener('didFocus', () => {
         this.loadData();
        });}

    componentWillUnmount(){
        this.props.navigation.removeEventListener('didFocus',()=>{})
    }
    
    _searchFilterFunction = (text)  => {

        console.warn("search : "+text)

        const newData = this.data.filter(item => {
         
            const itemData = `${item.agtName.toUpperCase()}`;

            return itemData.indexOf(text.toUpperCase()) > -1  ;   
        });    

        this.setState({
            data: newData,
            search:text
        });
      };
    
    _updateStatusFilter = (text) =>{
     
        console.warn(text)

        if(parseInt(text)){
            item = statusDb.get(parseInt(text))
            console.warn(item)
            text = item.statName
        }else if(text==='all'){
            text = ''
        }else{
            text = text;
        }

        console.warn("filter : "+text)

        const newData = this.data.filter(item => {
            const itemData = `${item.status.statName.toUpperCase()}`;

            return itemData.indexOf(text.toUpperCase()) > -1  ;   
        });    

        this.setState({
            data: newData,
            filter:text
        });
    }

    _refreshListData =()=>{

        return new Promise((resolve,reject)=>{
            this.loadData();
            resolve(true)
            /*getAgents(global.token).then((res) => {
                this.data = filterGetAgentByCode(res,global.user.agentCode)
                this.setState({
                   data:this.data
                })
                if(res.length>0){
                    resolve(true)
                }else resolve(false)
            }); */
        })
    }

    render(){ 
        return (
            <View style={{flex:1}}>
            <SwipeList 
                source={this.state.data} 
                onChangeText = {this._searchFilterFunction} 
                onFilterChange={this._updateStatusFilter} 
                filter={String(this.state.filter)}
                onRefresh={this._refreshListData}
                onPress={(item)=>{this.props.navigation.navigate('LeadDetail',{data:item,type:'detail'})}}
                onPress_Call={ (number) => {this.call(number)}}
                onPress_Email={(email)=>{this.mailTo(email)}}
                onPress_Introduction={_=>{{this.props.navigation.navigate("Introduction");}}}
                onPress_Schedule={(item)=>{this.props.navigation.navigate("Schedule",{data:item})}}
                />
                <Fab 
                    active={true}
                    direction="up"
                    position="bottomRight" 
                    style={{backgroundColor:'white'}} 
                    onPress={() => {this.props.navigation.navigate('LeadDetail')}}>
                    <Icon name="add" style={{color:defaultColor.Red}}/>
                </Fab>
            </View>
        );
    }
    
    call(number){
        this.intentUrl(`tel:${number}`)        
    }

    mailTo(email){
        this.intentUrl(`mailto:${email}`)
    }

    intentUrl(url){
        Linking.canOpenURL(url).then(supported => {
        if (!supported) {
            console.log('Can\'t handle url: ' + url);
        } else {
            return Linking.openURL(url);
        }
        }).catch(err => console.error('An error occurred', err));
    }
}