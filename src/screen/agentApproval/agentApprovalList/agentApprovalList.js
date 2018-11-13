import React,{Component} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

import ThumbImage from '../../../component/thumbImage/thumbimage.js'

import styles from './agentApprovalList.style.js';

export default class AgentApprovalList extends Component{
    constructor(props){
        super(props);
    }

    AgentApprovalList_RenderListItem = ({item}) =>{
        return(
            <TouchableOpacity>
                <ThumbImage source={}/>
                <View>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </View>
                <Icon/>
            </TouchableOpacity>
        )
    }

    AgentApprovalList_RenderSeparator = () =>{
        return(
            <View style={styles.agentApprovaList_separator}/>
        )
    }

    render(){
        return(
            <FlatList
            />
        )
    }
}

AgentApprovalList.propTypes={
    data: PropTypes.array,

}