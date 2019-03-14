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
import { postAgent, newAgent } from '../../../services/agentService.js';
import newInformationScreen from './new/newInformationScreen.js';
import { newValidator } from '../../../class/validator.js';


export default class LeadDetail extends Component{

    constructor(props){
        super(props);
        
        this.data = this.props.navigation.getParam('data',[]);
        this.type = this.props.navigation.getParam('type','new');
        
        this.state = {
          //experience screen
          id:this.data.id,
          experience:{
            exInsurance: this.data.agtExInsuranceCompany,
            exExitDate: Moment(this.data.agtExInsuranceExitDate).format('DD MMM YYYY'),
            exExpiredDate: Moment(this.data.agtExAajiExpired).format('DD MMM YYYY'),
            licenseAgentNo: this.convertNumberToString(this.data.agtAajiNo),
            bank: this.convertNumberToString(this.data.bank),
            bankAccountNo: this.convertNumberToString(this.agtBankAccountNo),
            bankAccountName: this.convertNumberToString(this.agtBankAccName),
            taxId: this.convertNumberToString(this.agtTaxId),
          },

          //personal screen
          personal : {
            name:this.data.agtName,
            level:this.convertNumberToString(this.data.level),
            branch:this.convertNumberToString(this.data.branch),
            code: this.data.agtCode,
            status: this.convertNumberToString(this.data.status),
            pob: this.data.agtPob,
            address: this.data.agtAddr1,
            address2: this.data.agtAddr2,
            district: this.data.agtDistrict,
            city: this.data.agtCity,
            idCardNo: this.convertNumberToString(this.data.agtIdCardNo),
            sex:this.data.agtSex,
            education:this.convertNumberToString(this.education),
            religion:this.convertNumberToString(this.religion),
            dob:Moment(this.data.agtDob).format('DD MM YYYY'),
            joinDate:Moment(this.data.joinDate).format('DD MM YYYY'),

            maritalStatus: this.data.agtMaritalStatus,
            occupation:this.convertNumberToString(this.data.occupation),
            dependent:this.convertNumberToString(this.data.agtDependentTotal),
            phone:this.convertNumberToString(this.data.agtMobileNumber),
            email:this.data.agtEmail
          },

          //recruit screen
          recruit:{
            leaderType: this.data.agtLeaderType,
            leaderName: 'Painem',
            leaderRelation: 'Sebatas teman',
            directLeaderType: this.data.agtLeaderType,
          },

          //new screen
          new:{}

        }

        this._handleTextInputChange = (name,value) =>{
          this.setState({[name]:value})
       }
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
      this.onPressSubmit()
    }

    onPressSubmit() {
      if(this.type==='new'){
        let data = this.state.new
        if(newValidator(data)){
          newAgent(global.token, data).then((res) => {
            console.warn('res: '+res)
            this.onPressCancel()
          });
        }
      }else{
        console.warn("Submit clicked")
      }
    }

    onPressCancel (){
      this.props.navigation.dispatch(NavigationActions.back())
    }

    _renderTab(){
      
      if(this.type==='detail'){
        return (
          <DetailTabNavigator screenProps={{data:this.data, state:this.state, textInputHandler:this._handleTextInputChange}}/>
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
  New: {
      screen: newInformationScreen,
      navigationOptions: ({ navigation }) => ({
          title: "New",
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

const DetailTabNavigator = createMaterialTopTabNavigator({
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