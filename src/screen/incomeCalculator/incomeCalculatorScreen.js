import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import PropTypes from 'prop-types';

import MainBody from '../../component/mainBody/mainBody.js';
import Profile from '../../component/profile/profile.js';
// import LeadList from './leadList/leadList.js';
// import ScheduleRegistration from './scheduleRegistration/scheduleRegistration.js';
import styles from './incomeCalculatorScreen.style.js';

// const LeadStackRouter = createStackNavigator(
//     {
//       LeadList:LeadList,
//       Schedule:ScheduleRegistration,
//     },
//     {
//       headerMode:'none',

//       cardStyle:{backgroundColor:'transparent'}
//     }
//   )

export default class IncomeCalculatorScreen extends Component{
    // addProps = {
    //     data: this.props.data,
    //     onPress: this.props.onPress,
    //     navigation:this.props.navigation, 
    //     }

    render(){
        return(
            <MainBody source={require('../../../resource/image/bg.jpg')}>
                <Profile imageOnly={true} source={require('../../../resource/image/profile.jpg')} name="Fandi Fadillah" group="Agency BEST"/>
                <View style={styles.incomeCalculator_titleContainer}>
                    <Text style={styles.incomeCalculator_titleText}>Income Calculator</Text>
                </View>
                
            </MainBody>
        )
    }
}