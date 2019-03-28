import React, {Component} from 'react';
import {View, Text,Image, ToastAndroid, TouchableWithoutFeedback, ImageBackground, ScrollView} from 'react-native';
import { scale,verticalScale } from 'react-native-size-matters';

import {_getValueById} from '../../helper/helper.js';
import MainBody from '../../component/mainBody/mainBody.js';
import Profile from '../../component/profile/profile.js';
import {createMaterialTopTabNavigator  } from 'react-navigation';
import {Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import firebase from 'react-native-firebase';

import { PieChart } from 'react-native-svg-charts'
import { Circle, G, Line } from 'react-native-svg'

import {ds_LeadListData} from '../../helper/data.js'
import { Tab } from 'native-base';

import styles,{defaultColor} from './homeScreen.style.js'
import DashboardScreen from './dashboardScreen.js';
import DetailScreen from './detailScreen.js';

export default class HomeScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    render(){ 
        agentName = global.user.usrAgentName
        branch = global.user.usrBranch?global.user.usrBranch:'-'

        return (
            <MainBody source={require('../../../resource/image/bg.jpg')}>
                <Profile imageOnly={false} source={require('../../../resource/image/profile.jpg')} name={agentName} group={branch}/>
                <View style={{flex:1,marginHorizontal:scale(15)}}>
                    <TabNavigator/>
                </View>
            </MainBody>
        );
    }
}

const TabNavigator = createMaterialTopTabNavigator(
    {
        Home:{
              screen : DashboardScreen,
              navigationOptions:({navigation})=>({
                title:"Dashboard",
                tabBarIcon:({tintColor})=>
                  <Image source={require('./icon/analytics.png')} style={{width:24,height:24}}></Image>
              })
        }
        ,Tab:{
              screen :DetailScreen,
              navigationOptions:({navigation})=>({
                title:'Tab',
                tabBarIcon:({tintColor}) => 
                    <Image source={require('./icon/bullseye.png')} style={{width:24,height:24}}></Image>
              })
        }
    },{
        lazy:true,
        swipeEnabled:true,
        animationEnabled:true,
        style:{backgroundColor:'white'},
        navigationOptions:{
        gesturesEnabled:true
        },
        tabBarOptions:{
            showIcon:true,
            showLabel:false,
            style:{
                backgroundColor:'white'
            },
            indicatorStyle:{
                backgroundColor:defaultColor.Red
            }
        },  
    }); 