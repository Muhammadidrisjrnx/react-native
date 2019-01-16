import React, {Component} from 'react';
import {View, Text,Image, ToastAndroid, AsyncStorage, FlatList} from 'react-native';
import {Icon, Fab, Button} from 'native-base';

import {_getValueById} from '../../../helper/helper.js';
import MainBody from '../../../component/mainBody/mainBody.js';
import Profile from '../../../component/profile/profile.js';
import ThumbImage from '../../../component/thumbImage/thumbimage.js';
import SwipeList from '../../../component/swipeList/swipelist.js';
import MainList from './MainList.js';
import {defaultColor} from './leadList.style.js';

import {ds_LeadListData} from '../../../helper/data.js';

export default class LeadList extends Component{
    static navigationOptions = {
        header:null
        
    }
    
    constructor(props){
        super(props);

        this._storeData();

        //ToastAndroid.show(JSON.stringify(ds_data), ToastAndroid.LONG);
        this.state=({
            data: [],
            filter: '1',
            search: '',
            active:'false'
        });

        this._searchFilterFunction = this._searchFilterFunction.bind(this);
        this._onPress = this._onPress.bind(this);
    }

    _storeData = () => {
        try{
            AsyncStorage.getItem('t_lead').then((item)=>{
                if (item != null) 
                {
                    const result = JSON.parse(item);

                    //ToastAndroid.show(JSON.stringify(result),ToastAndroid.SHORT);
                    this.arrayholder = result.sort(function(a, b) { return a.agt_id < b.agt_id ? 1 : -1; });

                    this.setState({
                        data: result.sort(function(a, b) { return a.agt_id < b.agt_id ? 1 : -1; }).slice(0, 10),
                        filter: '1',
                        search: '',
                        offset: 10,
                        refreshing: false,
                    });

                    
                }                 
            });
            //ToastAndroid.show(value,ToastAndroid.LONG);
            
        } catch(error){
            ToastAndroid.show('Failed!',ToastAndroid.SHORT);
        } 
    }

    _refreshListData =()=>{

        return new Promise((resolve,reject)=>{
            const previousOffset = this.state.offset;
            var result =true;

            const newData = this.arrayholder;

            if(newData!=null){
                //ToastAndroid.show(JSON.stringify(this.arrayholder),ToastAndroid.SHORT);

                this.setState({
                    data: newData.sort(function(a, b) { return a.agt_id < b.agt_id ? 1 : -1; }).slice(0, previousOffset+10),
                    offset: previousOffset+10
                });

                resolve(true);
            }
            else{
                resolve(false);
            }
        })
    }

    _searchFilterFunction = text => {
        // this.setState({search:text });
        // this._refreshList(text,this.props.filter);

        const newData = this.arrayholder.filter(item => {
            // var nameFilter =true;
            // var statusFilter =true;

            // if(name==''){
            //     nameFilter= true;
            // }else
            // {
            //     nameFilter = `${item.agt_name.toUpperCase()}` == name.toUpperCase();
            // }

            // if(status==''){
            //     statusFilter = true;
            // }else
            // {
            //     statusFilter = item.agt_stat_id == status;
            // }
            const itemData = `${item.agt_name.toUpperCase()}`;

            return itemData.indexOf(text.toUpperCase()) > -1  ;   
        });    

        this.setState({
            data: newData,
            search:text
        });
      };
    
    _updateStatusFilter = text =>{
        // this.setState({filter:text });
        // this._refreshList(this.props.search,text);

        const newData = this.arrayholder.filter(item => {
            // var nameFilter =true;
            // var statusFilter =true;

            // if(name==''){
            //     nameFilter= true;
            // }else
            // {
            //     nameFilter = `${item.agt_name.toUpperCase()}` == name.toUpperCase();
            // }

            // if(status==''){
            //     statusFilter = true;
            // }else
            // {
            //     statusFilter = item.agt_stat_id == status;
            // }
            const itemData = `${item.agt_name.toUpperCase()}`;

            return itemData.indexOf(text.toUpperCase()) > -1  ;   
        });    

        this.setState({
            data: newData,
            search:text
        });
    }

    _refreshList = (status,name) =>{
        const newData = this.arrayholder.filter(item => {
            var nameFilter =true;
            var statusFilter =true;

            ToastAndroid.show(this.props.filter,ToastAndroid.SHORT);

            if(name==''){
                nameFilter= true;
            }else
            {
                nameFilter = `${item.agt_name.toUpperCase()}` == name.toUpperCase();
            }

            if(status==''){
                statusFilter = true;
            }else
            {
                statusFilter = item.agt_stat_id == status;
            }
            

            return nameFilter && statusFilter ;    
        });    

        this.setState({ data: newData });
    }

    _onPress = (item) =>{
        ToastAndroid.show(item,ToastAndroid.SHORT);
    }
    

    render(){ 
        // alert(_getValueById("asd"));
        //ToastAndroid.show(JSON.stringify(this.state.data), ToastAndroid.LONG);
        return (
            <View style={{flex:1}}>
            <SwipeList 
                source={this.state.data} 
                onChangeText = {this._searchFilterFunction} 
                onFilterChange={this._updateStatusFilter} 
                filter={String(this.state.filter)}
                onRefresh={this._refreshListData}
                onPress={(item)=>{this.props.navigation.navigate('LeadDetail',{data:item})}}
                //onPress={(item)=>{ToastAndroid.show(JSON.stringify(item), ToastAndroid.SHORT)}}
                onPress_BOS={_=>{this.props.navigation.navigate("Schedule",{scheduleType:1});}}
                onPress_AAJI={_=>{this.props.navigation.navigate("Schedule",{scheduleType:2});}}
                onPress_Introduction={_=>{this.props.navigation.navigate("Introduction");}}
                onPress_Selection={_=>{this.props.navigation.navigate("Selection");}}

                />
                <Fab 
                    active={this.state.active}
                    direction="up"
                    position="bottomRight" 
                    style={{backgroundColor:'white'}} 
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="add" style={{color:defaultColor.Red}}/>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                        <Icon name="create" />
                    </Button>
                    <Button style={{ backgroundColor: '#34A34F' }}>
                        <Icon name="contacts" />
                    </Button>
                    <Button disabled style={{ backgroundColor: '#DD5144' }}>
                        <Icon name="link" />
                    </Button>
                </Fab>
            </View>
            // <MainList
            //     data={this.state.data}
            //     initialNumToRender={5}
            //     onRefresh={this._refreshListData}
            //     //removeClippedSubviews={true}
            // />
        );
    }
}