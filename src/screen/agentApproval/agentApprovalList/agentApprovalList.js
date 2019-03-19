import React,{Component} from 'react';
import {FlatList, View, Text, TouchableOpacity, AsyncStorage, ToastAndroid} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

import ThumbImage from '../../../component/thumbImage/thumbimage.js'

import styles from './agentApprovalList.style.js';
import { getApprovalAgents } from '../../../services/webservice/agentService.js';

export default class AgentApprovalList extends Component{
    state={
        data:[],
        offset:10
    }

    constructor(props){
        super(props);

        this.AgentApprovalList_RenderListItem = this.AgentApprovalList_RenderListItem.bind(this);
        this.AgentApprovalList_RenderSeparator = this.AgentApprovalList_RenderSeparator.bind(this);
        this._keyExtractor = this._keyExtractor.bind(this);

        getApprovalAgents(global.token).then((res) => {
            this.setState({
               data:res
            })
        }); 

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
            <FlatList
            data={this.state.data}
            renderItem={this.AgentApprovalList_RenderListItem}
            ItemSeparatorComponent={this.AgentApprovalList_RenderSeparator}
            keyExtractor={this._keyExtractor}
            />
        )
    }
}
