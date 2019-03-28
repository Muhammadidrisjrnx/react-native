import React,{Component} from 'react';
import {View,Text,ToastAndroid, AsyncStorage} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import PropTypes from 'prop-types';

import MainBody from '../../component/mainBody/mainBody.js';
import Profile from '../../component/profile/profile.js';
import LeadList from './leadList/leadList.js';
import LeadDetail from './leadDetail/leadDetail.js';
import ScheduleRegistration from './scheduleRegistration/scheduleRegistration.js';
import styles from './leadScreen.style.js';
import Introduction from './introduction/introduction.js';
import {ds_Lead} from '../../helper/data.js';

const LeadStackRouter = createStackNavigator(
    {
      LeadList:LeadList,
      LeadDetail:LeadDetail,
      Schedule:ScheduleRegistration,
      Introduction:Introduction
    },
    {
      headerMode:'none',
      cardStyle:styles.lead_navigatorCard 
    }
  )

export default class LeadScreen extends Component{
    // addProps = {
    //     data: this.props.data,
    //     onPress: this.props.onPress,
    //     navigation:this.props.navigation, 
    //     }

    constructor(){
        super();
        //this._storeData();
    }

    render(){
        return(
            <MainBody source={require('../../../resource/image/bg.jpg')}>
                <Profile imageOnly={true} source={require('../../../resource/image/profile.jpg')} name="Fandi Fadillah" group="Agency BEST"/>
                <View style={styles.lead_titleContainer}>
                    <Text style={styles.lead_titleText}>Lead Management</Text>
                </View>
                <LeadStackRouter/>
                <View>
                
                </View>
                
            </MainBody>
        )
    }
}