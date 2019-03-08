import React,{Component} from 'react';
import {View, YellowBox,Platform, AsyncStorage,ToastAndroid, } from 'react-native';
import {createDrawerNavigator,createStackNavigator} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import firebase from 'react-native-firebase';


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
    SundayPunch:SundayPunchScreen,
  },
  {
    drawerLockMode:'locked-closed',
    initialRouteName:'BusinessOpportunity',
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
    initialRouteName: 'Login',
    contentComponent: props => <Sidebar {... props}/>,
  }
)

export default class App extends Component {
  constructor(props){
    super(props);

    this._storeData = this._storeData.bind(this);

    firebase.messaging().getToken()
    .then(fcmToken => {
      if (fcmToken) {
        // user has a device token
      } else {
        // user doesn't have a device token yet
      } 
    });

    firebase.messaging().hasPermission()
    .then(enabled => {
      if (enabled) {
        // user has permissions
      } else {
        // user doesn't have permission
        firebase.messaging().requestPermission()
        .then(() => {
          // User has authorised  
        })
        .catch(error => {
          // User has rejected permissions  
        });
      } 
    });
  }

  componentDidMount() {
    this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(fcmToken => {
        // Process your token as required
    });

    this.messageListener = firebase.messaging().onMessage((message) => {
      // Process your message as required
    });

    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
      // Process your notification as required
      // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
    });
    this.notificationListener = firebase.notifications().onNotification((notification) => {
        // Process your notification as required
    });
    }

  componentWillUnmount() {
    this.onTokenRefreshListener();
    this.messageListener();
    this.notificationDisplayedListener();
    this.notificationListener();
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