import React,{Component} from 'react';
import {FlatList, View, Text, TouchableOpacity, AsyncStorage, ToastAndroid} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

import ThumbImage from '../../../component/thumbImage/thumbimage.js'

import styles from './agentApprovalList.style.js';
import { getApprovalAgents } from '../../../services/webservice/agentService.js';
import { renderNoData } from '../../../helper/renderer.js';

export default class AgentApprovalList extends Component{
    state={
        data:[],
        offset:10,
        refreshing:false
    }

    constructor(props){
        super(props);

        this.AgentApprovalList_RenderListItem = this.AgentApprovalList_RenderListItem.bind(this);
        this.AgentApprovalList_RenderSeparator = this.AgentApprovalList_RenderSeparator.bind(this);
        this._keyExtractor = this._keyExtractor.bind(this);
    }

    componentDidMount(){
        this._onRefresh()
    }

    componentWillMount(){
        this._subscribe = this.props.navigation.addListener('didFocus', () => {
         this._onRefresh();
        });}

    componentWillUnmount(){
        this.props.navigation.removeEventListener('didFocus',()=>{})
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        
        return new Promise((resolve,reject)=>{
            this.loadData();
            resolve(true)
            
        }).then(()=>{
            this.setState({refreshing:false})
        })
    }

    loadData = () => {
        getApprovalAgents(global.token,global.user.usrAgentCode).then((res) => {
            this.setState({
               data:res
            })
        })
    }

    AgentApprovalList_RenderListItem = ({item}) =>{
        _onPress = () => {
            //ToastAndroid.show(item.agt_name, ToastAndroid.SHORT);
            this.props.navigation.navigate('Detail',{data:item});
        }

        return(
            <TouchableOpacity key={item.agt_id } style={styles.listItem_TouchableOpac} onPress={_onPress}>
                <View style={styles.listItem_mainContainer}>
                    <ThumbImage isImage={false} initialLetter={item.agtName.substring(0,1)} />
                    <View style={styles.listItem_textContainer}>
                        <Text style={styles.listItem_textTitle}>{item.agtName}</Text>
                        <Text style={styles.listItem_textSubTitle}>{item.level.lvlName}</Text>
                        <Text style={styles.listItem_textSubTitle}>{item.branch?item.branch.brnName:''}</Text>
                        <Text style={styles.listItem_textSubTitle}>{item.status?item.status.statName:''}</Text>
                    </View>
                    <Icon type={'font-awesome'} name={'angle-right'} iconStyle={styles.listItem_rightIcon}/>
                </View>
            </TouchableOpacity>
        )
    }

    AgentApprovalList_RenderSeparator = () =>{
        return(
            <View style={styles.agentApprovaList_separator}/>
        )
    }

    _keyExtractor = (item,index) =>{
        return String(item.agtId)
    }

    render(){
        return(
            <View>
                <FlatList
                data={this.state.data}
                renderItem={this.AgentApprovalList_RenderListItem}
                ItemSeparatorComponent={this.AgentApprovalList_RenderSeparator}
                keyExtractor={this._keyExtractor}
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
                />
                {
                    ((!this.state.data) || (this.state.data.length<=0)) && renderNoData()
                }
            </View>
        )
    }
}
