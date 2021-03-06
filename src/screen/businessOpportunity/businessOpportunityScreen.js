import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import PropTypes from 'prop-types';

import MainBody from '../../component/mainBody/mainBody.js';
import Profile from '../../component/profile/profile.js';
// import LeadList from './leadList/leadList.js';
// import ScheduleRegistration from './scheduleRegistration/scheduleRegistration.js';
import styles from './businessOpportunityScreen.style.js';
import BusinessOpportunityList from './businessOpportunityList/businessOpportunityList';
import BusinessOpportunityDetail from './businessOpportunityDetail/businessOpportunityDetail';
import LeadDetail from './../lead/leadDetail/leadDetail';

const BusinessOpportunityRouter = createStackNavigator({
    List:BusinessOpportunityList,
    Detail:BusinessOpportunityDetail,
    LeadDetail:LeadDetail
},
{  
    headerMode:'none',
    cardStyle:styles.businessOpportunity_navigationCard
})

export default class BusinessOpportunityScreen extends Component{
    // addProps = {
    //     data: this.props.data,
    //     onPress: this.props.onPress,
    //     navigation:this.props.navigation, 
    //     }

    render(){
        return(
            <MainBody source={require('../../../resource/image/bg.jpg')}>
                <Profile imageOnly={true} source={require('../../../resource/image/profile.jpg')} name="Fandi Fadillah" group="Agency BEST"/>
                <View style={styles.businessOpportunity_titleContainer}>
                    <Text style={styles.businessOpportunity_titleText}>Business Opportunity</Text>
                </View>
                
                <BusinessOpportunityRouter/>
                
                
            </MainBody>
        )
    }
}