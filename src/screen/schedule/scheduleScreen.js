import React,{Component} from 'react';
import {View,Text,ScrollView,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown';
import {verticalScale,scale} from 'react-native-size-matters';
import {createStackNavigator} from 'react-navigation';
import PropTypes from 'prop-types';

import MainBody from '../../component/mainBody/mainBody.js';
import Profile from '../../component/profile/profile.js';
import {Calendar} from 'react-native-calendars';
// import LeadList from './leadList/leadList.js';
// import ScheduleRegistration from './scheduleRegistration/scheduleRegistration.js';
import styles,{defaultColor} from './scheduleScreen.style.js';
import ScheduleTab from './scheduleTab/scheduleTab.js';
import ScheduleDetail from './scheduleDetail/scheduleDetail.js';

const ScheduleRouter = createStackNavigator({
    Schedule:ScheduleTab,
    ScheduleDetail:ScheduleDetail,
},
{  
    headerMode:'none',
    cardStyle:styles.child
})

export default class ScheduleScreen extends Component{
    constructor(props) {
        super(props);
      }
  
    render(){
       
        return(
            <MainBody source={require('../../../resource/image/bg.jpg')}>
                <Profile imageOnly={true} source={require('../../../resource/image/profile.jpg')} name="Fandi Fadillah" group="Agency BEST"/>
                <View style={styles.schedule_titleContainer}>
                    <Text style={styles.schedule_titleText}>Schedule</Text>
                </View>
                <ScheduleRouter />
            </MainBody>
        );
    }
}