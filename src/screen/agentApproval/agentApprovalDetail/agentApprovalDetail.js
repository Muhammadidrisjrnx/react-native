import React,{Component} from 'react';
import {ToastAndroid,Image, View, Text, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator  } from 'react-navigation';
import Moment from 'moment';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

import ThumbImage from '../../../component/thumbImage/thumbimage.js'

import styles,{defaultColor} from './agentApprovalDetail.style.js';

import PersonalInformationScreen from './personalInformationScreen.js';
import SelectionInformationScreen from './selectionInformationScreen.js';
import ExperienceAndBankingInformationScreen from './experienceAndBankingInfomrationScreen.js';
import RecruitInformationScreen from './recruitInformationScreen.js';
import DocumentInformationScreen from './recruitInformationScreen.js';
import QualificationInformationScreen from './qualificationInformationScreen';
import { statusDecline, statusSubmitted } from '../../../helper/status.js';
import { updateAgent } from '../../../services/webservice/agentService.js';

export default class AgentApprovalDetail extends Component{
    constructor(props){
        super(props);
        this.data = this.props.navigation.getParam('data',[]);
    }

    onPressApprove () {
        this.data.status = statusSubmitted
        this.data.agtAproval1 = true
        this.post()
    }

    onPressReject(){
        this.data.status = statusDecline
        this.data.agtAproval1 = false
        this.post()
    }

    _onPressBack = () => {
        this.props.navigation.goBack();
    }

    post(){
        updateAgent(global.token, this.data).then((res) => {
            console.warn('result : '+JSON.stringify(res))
            this.onPressCancel()
        });
    }

    render(){
        const data = this.data
        //ToastAndroid.show(data.agt_name, ToastAndroid.SHORT);
        return(
            <View style={styles.detail_mainContainer}>
                <TouchableOpacity style={styles.detail_headerBackButton} onPress={this._onPressBack}>
                    <Icon type={'font-awesome'} name={'angle-left'} iconStyle={styles.detail_headerIcon}/>
                    <Text style={styles.detail_headerText}>Back</Text>
                </TouchableOpacity>

                <TabNavigator screenProps={{data:data}}/>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonOpac} onPress={()=>{this.onPressApprove()}}>
                        <Text style={styles.buttonText}>
                            Approve
                        </Text>
                        <Icon type={'font-awesome'} name={'angle-right'} iconStyle={styles.buttonIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOpac} onPress={()=>{this.onPressReject()}}>
                        <Text style={styles.buttonText}>
                            Reject
                        </Text>
                        <Icon type={'font-awesome'} name={'angle-right'} iconStyle={styles.buttonIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const TabNavigator = createMaterialTopTabNavigator({
    Personal: {
        screen: PersonalInformationScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Identitas Calon Agent",
            tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'user'} iconStyle={styles.buttonIcon}/>
        })
    },
    ExperienceAndBanking: {
        screen: ExperienceAndBankingInformationScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Pengalaman Terakhir & Informasi Bank",
            tabBarIcon:({tintColor}) => <Icon type={'octicon'} name={'clippy'} iconStyle={styles.buttonIcon}/>
        })
    },
    Recruit: {
        screen: RecruitInformationScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Perekrut & Leader",
            tabBarIcon:({tintColor}) => <Icon type={'octicon'} name={'organization'} iconStyle={styles.buttonIcon}/>
        })
    },
    Document: {
        screen: DocumentInformationScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Dokumen",
            tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'file'} iconStyle={styles.buttonIcon}/>
        })
    },
    Selection: {
        screen: SelectionInformationScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Selection",
            tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'star'} iconStyle={styles.buttonIcon}/>
        })
    },
    Qualification: {
        screen: QualificationInformationScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Qualification",
            tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'check-circle'} iconStyle={styles.buttonIcon}/>
        })
    },
    
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
      }
  });