import React,{Component} from 'react';
import {View,Text,ToastAndroid, AsyncStorage} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import PropTypes from 'prop-types';

import MainBody from '../../component/mainBody/mainBody.js';
import Profile from '../../component/profile/profile.js';
import LeadList from './leadList/leadList.js';
import LeadDetail from './leadDetail/leadDetail.js';
import ScheduleRegistration from './scheduleRegistration/scheduleRegistration.js';
import Selection from './selection/selection.js';
import styles from './leadScreen.style.js';
import Introduction from './introduction/introduction.js';
import {ds_Lead} from '../../helper/data.js';

const LeadStackRouter = createStackNavigator(
    {
      LeadList:LeadList,
      LeadDetail:LeadDetail,
      Schedule:ScheduleRegistration,
      Selection:Selection,
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

    _storeData = async () => {
        try {
            const value = await AsyncStorage.getItem('t_lead');

            if (value !== null) 
            {
                
                var data = JSON.parse(value);
                ToastAndroid.show(String(Object.keys(data).length),ToastAndroid.SHORT);
            } else
            {
                await AsyncStorage.setItem('t_lead', JSON.stringify(ds_Lead));
                ToastAndroid.show('Success!',ToastAndroid.SHORT);
            }
            
        } catch (error) {
            ToastAndroid.show(String(error),ToastAndroid.SHORT);
        }
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