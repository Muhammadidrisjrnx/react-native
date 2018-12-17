import React,{Component} from 'react';
import {View, YellowBox,Platform} from 'react-native';
import {createDrawerNavigator,createStackNavigator} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';


import HomeScreen from './src/screen/home/homeScreen.js';
import LoginScreen from './src/screen/login/loginScreen.js';
import LeadScreen from './src/screen/lead/leadScreen.js';
import NewsScreen from './src/screen/news/newsScreen.js'
import AgentApprovalScreen from './src/screen/agentApproval/agentApprovalScreen.js';
import BusinessOpportunityScreen from './src/screen/businessOpportunity/businessOpportunityScreen.js';
import IncomeCalculatorScreen from './src/screen/incomeCalculator/incomeCalculatorScreen.js';
import SundayPunchScreen from './src/screen/sundayPunch/sundayPunchScreen.js';
import ScheduleScreen from './src/screen/schedule/scheduleScreen.js';

import Header from './src/component/header/header.js';
import Sidebar from './src/component/siderbar/sidebar.js';

import{ds_menuData} from './src/helper/data.js'


const MainStackRouter = createStackNavigator(
  {
    News:NewsScreen,
    Dashboard:HomeScreen,
    LeadManagement:LeadScreen,
    Schedule:ScheduleScreen,
    AgentApproval:AgentApprovalScreen,
    BusinessOpportunity:BusinessOpportunityScreen,
    IncomeCalculator:IncomeCalculatorScreen,
    SundayPunch:SundayPunchScreen
  },
  {
    drawerLockMode:'locked-closed',
    initialRouteName:'NewsScreen',
    navigationOptions : {
      header:(props)=>(
        <View
          style={{
            backgroundColor:'#fff',
            ...Platform.select({
              ios:{
                height:80,
                paddingTop:20
              }, 
              android:{
                height:60
              }})
          }}
        >
      <Header {...props}/>
    </View>
      )
    },
  });

const MainRouter = createDrawerNavigator(
  {
    Home : MainStackRouter,
    Login: {
      screen : LoginScreen,
      navigationOptions:{
        drawerLockMode: 'locked-closed'
      }
    }
  },
  { 
    initialRouteName: 'Home',
    contentComponent: props => <Sidebar {... props}/>,
    }
)

export default class App extends Component {

  componentDidMount() {
      SplashScreen.hide();
  }

  render(){
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
    return <MainRouter/>;
  }
}