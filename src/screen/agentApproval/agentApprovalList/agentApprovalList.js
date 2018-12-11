import React,{Component} from 'react';
import {FlatList, View, Text, TouchableOpacity, AsyncStorage, ToastAndroid} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

import ThumbImage from '../../../component/thumbImage/thumbimage.js'

import styles from './agentApprovalList.style.js';

export default class AgentApprovalList extends Component{
    state={
        data:[],
        offset:10
    }

    constructor(props){
        super(props);

        this.getData = this.getData.bind(this);
        this.AgentApprovalList_RenderListItem = this.AgentApprovalList_RenderListItem.bind(this);
        this.AgentApprovalList_RenderSeparator = this.AgentApprovalList_RenderSeparator.bind(this);
        this._keyExtractor = this._keyExtractor.bind(this);

        this.getData();
    }

    getData = () => {
        try{
            AsyncStorage.getItem('t_lead').then((item)=>{
                if(item != null){
                    const newData = JSON.parse(item).sort(function(a,b){return a.agt_id < b.agt_id?1:-1;});

                    this.arrayholder = newData;

                    this.setState({
                        data:newData.slice(0,10)
                    })
                }
            })
        }
        catch(error){
            ToastAndroid.show('Failed!',ToastAndroid.SHORT);
        }
    }

    AgentApprovalList_RenderListItem = ({item}) =>{
        _onPress = () => {
            //ToastAndroid.show(item.agt_name, ToastAndroid.SHORT);
            this.props.navigation.navigate('Detail',{data:item});
        }

        return(
            <TouchableOpacity key={item.agt_id } style={styles.listItem_TouchableOpac} onPress={_onPress}>
                <View style={styles.listItem_mainContainer}>
                    <ThumbImage source={require('../../../../resource/image/profile.jpg')} />
                    <View style={styles.listItem_textContainer}>
                        <Text style={styles.listItem_textTitle}>{item.agt_name}</Text>
                        <Text style={styles.listItem_textSubTitle}>{item.agt_lvl_id}</Text>
                        <Text style={styles.listItem_textSubTitle}>{item.agt_brc_id}</Text>
                        <Text style={styles.listItem_textSubTitle}>{item.agt_stat_id}</Text>
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
        return String(item.agt_id)
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
