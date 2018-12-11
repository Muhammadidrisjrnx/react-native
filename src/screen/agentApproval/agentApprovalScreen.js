import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import PropTypes from 'prop-types';

import MainBody from '../../component/mainBody/mainBody.js';
import Profile from '../../component/profile/profile.js';
import AgentApprovalList from './agentApprovalList/agentApprovalList.js';
import AgentApprovalDetail from './agentApprovalDetail/agentApprovalDetail.js';
import styles from './agentApprovalScreen.style.js';
import { scale } from 'react-native-size-matters';

const NewAgentApprovalStackRouter = createStackNavigator(
    {
      List:AgentApprovalList,
      Detail:AgentApprovalDetail,
    },
    {
      headerMode:'none',

      cardStyle:{
          backgroundColor:'white',
          marginHorizontal:scale(15)
        }
    }
  )

export default class AgentApprovalScreen extends Component{
    // addProps = {
    //     data: this.props.data,
    //     onPress: this.props.onPress,
    //     navigation:this.props.navigation, 
    //     }

    render(){
        return(
            <MainBody source={require('../../../resource/image/bg.jpg')}>
                <Profile imageOnly={true} source={require('../../../resource/image/profile.jpg')} name="Fandi Fadillah" group="Agency BEST"/>
                <View style={styles.agentApproval_titleContainer}>
                    <Text style={styles.agentApproval_titleText}>New Agent Approval</Text>
                </View>
                <NewAgentApprovalStackRouter/>
            </MainBody>
        )
    }
}