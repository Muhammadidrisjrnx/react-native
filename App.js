import React,{Component} from 'react';
import {View, YellowBox,Platform, AsyncStorage,ToastAndroid} from 'react-native';
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

import{ds_Lead,ds_menuData} from './src/helper/data.js'


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
    initialRouteName:'Dashboard',
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
  constructor(props){
    super(props);

    this._storeData = this._storeData.bind(this);
  }

  _storeData = async () => {
    try {
        const value = await AsyncStorage.getItem('t_lead');

        //ToastAndroid.show(JSON.stringify(value),ToastAndroid.LONG);

        if (value !== null) 
        {
            var data = JSON.parse(value);
            //ToastAndroid.show('Already Exists!',ToastAndroid.SHORT);
        } else
        {
            await AsyncStorage.setItem('t_lead', JSON.stringify(ds_Lead));
            //ToastAndroid.show('Success!',ToastAndroid.SHORT);
        }
        
    } catch (error) {
        // uy,ToastAndroid.show(JSON.stringify(error),ToastAndroid.LONG);
    }
  }

  componentDidMount() {
      this._storeData();
      SplashScreen.hide();
  }

  render(){
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
    return <MainRouter/>;
  }
}