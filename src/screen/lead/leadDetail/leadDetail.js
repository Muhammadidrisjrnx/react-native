import React,{Component} from 'react';
import {ToastAndroid, View, Text, TouchableOpacity,ScrollView,TouchableWithoutFeedback} from 'react-native';
import {createMaterialTopTabNavigator  } from 'react-navigation';
import Moment from 'moment';
import {Dropdown} from 'react-native-material-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Icon,FormInput,FormLabel,FormValidationMessage} from 'react-native-elements';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';

import ThumbImage from '../../../component/thumbImage/thumbimage.js'

import styles,{defaultColor} from './leadDetail.style.js';
import { verticalScale } from 'react-native-size-matters';

import PersonalInformationScreen from './personal/personalInformationScreen.js';
import ExperienceAndBankingInformationScreen from './experience/experienceAndBankingInformationScreen';
import RecruitInformationScreen from './recruit/recruitInformationScreen.js';
import DocumentInformationScreen from './document/documentInformationScreen.js';
import SelectionScreen from './selection/selectionScreen.js';


export default class LeadDetail extends Component{

    constructor(props){
        super(props);
        
        this.data = this.props.navigation.getParam('data',[]);
        
        this.state = {
          //experience screen
          experience:{
            exInsurance: this.data.agt_ex_insurance_company,
            exExitDate: Moment(this.data.agt_ex_insurance_exit_date).format('DD MMM YYYY'),
            exExpiredDate: Moment(this.data.agt_ex_aaji_expired).format('DD MMM YYYY'),
            licenseAgentNo: this.convertNumberToString(this.data.agt_aaji_no),
            bank: this.convertNumberToString(this.agt_bnk_id),
            bankAccountNo: this.convertNumberToString(this.agt_bnk_acc_no),
            bankAccountName: this.convertNumberToString(this.agt_bnk_acc_name),
            taxId: this.convertNumberToString(this.agt_tax_id),
          },

          //personal screen
          personal : {
            name:this.data.agt_name,
            level:this.data.agt_lvl_id,
            branch:this.data.agt_brc_id,
            code: this.data.agt_code,
            status: this.convertNumberToString(this.data.agt_stat_id),
            pob: 'Paradise City',
            address: this.data.agt_addr1,
            address2: this.data.agt_addr2,
            district: this.data.agt_district,
            city: this.data.agt_city,
            idCardNo: this.convertNumberToString(this.data.agt_id_card_no),
            sex:this.data.agt_sex,
            education:this.data.edu_id,
            religion:this.data.agt_reli_id,
            dob:Moment(this.data.agt_dob).format('DD MM YYYY'),
            joinDate:Moment(this.data.joinDate).format('DD MM YYYY'),

            maritalStatus: this.convertNumberToString(this.data.agt_marital_status),
            occupation:this.convertNumberToString(this.data.agt_ocu_id),
            dependent:this.convertNumberToString(this.data.agt_dependent_total),
            phone:this.convertNumberToString(this.data.agt_mobile_number),
            email:this.data.agt_email
          },

          //recruit screen
          recruit:{
            leaderType: this.convertNumberToString(this.data.agt_leader_type),
            leaderName: 'Painem',
            leaderRelation: 'Sebatas teman',
            directLeaderType: this.convertNumberToString(this.data.agt_leader_type),
          }
        }

        this._handleTextInputChange = (group,name,value) =>{
          this.setState({[group]:{[name]:value}})
       }

       if(this.data.agt_name){
          this.state.type='detail'
        }else{
          this.state.type='new'
        }
    }

     

    _handleTextInputChangeEmpty(n,v){
      console.warn(n+"-"+v)
    }

    convertNumberToString (num){
      result = ""
      if(num) result=result+num
      return result
    }
    
    onPressApprove () {
      console.warn("Approved")
    }

    onPressReject (){
      console.warn("Rejected")
    }

    onPressSave (){
      console.warn("Save Button Clicked")
    }

    onPressSubmit() {
      console.warn("Submitted")
    }

    onPressCancel (){
      this.props.navigation.dispatch(NavigationActions.back())
    }

    _renderTab(){
      if(this.state.type==='detail'){
        return (
          <TabNavigator screenProps={{data:this.data, state:this.state, textInputHandler:this._handleTextInputChange}}/>
        )
      }else{
        return(
          <NewTabNavigator screenProps={{data:this.data, state:this.state, textInputHandler:this._handleTextInputChange}}/>
        )
      }
    }

    render(){
        
        //ToastAndroid.show(data.agt_name, ToastAndroid.SHORT);
        return(
            <View style={{flex:1}}>
                {this._renderTab()}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.buttonOpac,{backgroundColor:defaultColor.Red,flex:1}]} onPress={()=>this.onPressSave()}>
                        <Text style={[styles.buttonText,{color:defaultColor.White}]}>
                            Save
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonOpac,{flex:2,marginHorizontal:verticalScale(15)}]} onPress={()=>this.onPressSubmit()}>
                        <Text style={styles.buttonText}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonOpac,{backgroundColor:defaultColor.Red,flex:1}]} onPress={()=>this.onPressCancel()}>
                        <Text style={[styles.buttonText,{color:defaultColor.White}]}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                </View>
              
            </View>
        )

        
    }
}
const NewTabNavigator = createMaterialTopTabNavigator({
  Personal: {
      screen: PersonalInformationScreen,
      navigationOptions: ({ navigation }) => ({
          title: "Identitas Calon Agent",
          tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'user'} iconStyle={styles.buttonIcon}/>
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
    }
});

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
    screen: SelectionScreen,
    navigationOptions: ({ navigation }) => ({
        title: "Selection",
        tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'star'} iconStyle={styles.buttonIcon}/>
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