import React, {Component} from 'react';
import {Text,View, TouchableOpacity} from 'react-native';


import MainBody from '../../../component/mainBody/mainBody.js';
import Profile from '../../../component/profile/profile.js';
import SchedulePicker from '../../../component/schedulePicker/schedulePicker.js';
import {createMaterialTopTabNavigator  } from 'react-navigation';
import {Icon} from 'react-native-elements';
import {FormInput,FormLabel,FormValidationMessage} from 'react-native-elements';
import styles,{defaultColor} from './scheduleRegistration.style.js';

import {ds_Schedule} from '../../../helper/data.js'
import MyAppointmentTab from './tab/myAppointmentTab.js';
import BosTab from './tab/bosTab.js';
import AajiTab from './tab/aajiTab.js';

export default class ScheduleRegistration extends Component{
    constructor(props){
        super(props);

        this.state={
            data:ds_Schedule
        }
    }

    _onPress = () => {
        this.props.navigation.goBack();
    }

    componentWillMount(){
        const newData = ds_Schedule.filter(item => {
            const { navigation } = this.props;
            const itemId = navigation.getParam('scheduleType', '1');

            return item.scheduleType == itemId ;    
        });    

        this.setState({ data: newData });
    }

    render(){
        return(
            <View style={styles.detail_mainContainer}>
                <TouchableOpacity style={styles.detail_headerBackButton} onPress={this._onPress}>
                    <Icon type={'font-awesome'} name={'angle-left'} iconStyle={styles.detail_headerIcon}/>
                    <Text style={styles.detail_headerText}>Back</Text>
                </TouchableOpacity>
                <SchedulePicker/>  
            </View>
        )
    }
}

const TabNavigator = createMaterialTopTabNavigator({
    MyAppointment: {
        screen: MyAppointmentTab,
        navigationOptions: ({ navigation }) => ({
            title: "My Appointment",
            tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'calendar'} color={tintColor}/>
        })
    },
    BOS: {
        screen: BosTab,
        navigationOptions: ({ navigation }) => ({
            title: "BOS Schedule",
            tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'calendar'} color={tintColor}/>
        })
    },
    AAJI: {
        screen: AajiTab,
        navigationOptions: ({ navigation }) => ({
            title: "AAJI Schedule",
            tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'calendar'} color={tintColor}/>
        })
    },
},{
    lazy:true,
    swipeEnabled:true,
    animationEnabled:true,
    style:{backgroundColor:'transparent'},
    navigationOptions:{
      gesturesEnabled:true
    },
    tabBarOptions:{
        showIcon:true,
        showLabel:true,
        style:{
            backgroundColor:'transparent',
        },
        indicatorStyle:{
            backgroundColor:'#FFFFFF'
        },
        labelStyle:{
            color:'#FFFFFF'
        },
    }
})