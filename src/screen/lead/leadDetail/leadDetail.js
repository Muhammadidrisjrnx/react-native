import React,{Component} from 'react';
import {ToastAndroid, View, Text, TouchableOpacity,ScrollView,TouchableWithoutFeedback,Platform} from 'react-native';
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
import { postAgent, newAgent, updateAgent, updateAgentFiles, deleteAgent } from '../../../services/webservice/agentService';
import newInformationScreen from './new/newInformationScreen.js';
import { newValidator, detailValidator, informationValidator, bankingValidator, documentValidator } from '../../../helper/validator.js';
import { statusApproval, statusSubmitted } from '../../../helper/status.js';

export default class LeadDetail extends Component{

    constructor(props){
        super(props);
        
        this.data = this.props.navigation.getParam('data',[])
        this.type = this.props.navigation.getParam('type','new')
        
        this.files = {}
        
        this.state = {
          //experience screen
          id:this.data.id,
          tabNav: {},

          /*
            "agtExInsuranceCompany": null,
            "agtExInsuranceResignDate": null,
            "agtExAajiExpired": null,
            "agtAajiNo": null,
            "agtBankAccountNo": null,
            "agtBankAccountName": null,
            "agtTaxId": null */

          experience:{
            agtExInsuranceCompany: this.data.agtExInsuranceCompany,
            agtExInsuranceResignDate: this.data.agtExInsuranceResignDate,
            agtExAajiExpired: this.data.agtExAajiExpired,
            agtAajiNo: this.data.agtAajiNo,
            bank: this.data.bank,
            agtBankAccountNo:this.data.agtBankAccountNo,
            agtBankAccountName: this.data.agtBankAccountName,
            agtTaxId: this.data.agtTaxId,
          },

          //personal screen
          personal : {
            agtName:this.data.agtName,
            level:this.data.level,
            branch:this.data.branch,
            agtCode: this.data.agtCode,
            status: this.data.status,
            agtPob: this.data.agtPob,
            agtAddr1: this.data.agtAddr1,
            agtAddr2: this.data.agtAddr2,
            agtDistrict: this.data.agtDistrict,
            city: this.data.city,
            agtIdCardNo: this.convertNumberToString(this.data.agtIdCardNo),
            agtSex:this.data.agtSex,
            education:this.data.education,
            religion:this.data.religion,
            agtDob:this.data.agtDob,
            agtJoinDate:this.data.agtJoinDate,

            agtMaritalStatus: this.data.agtMaritalStatus,
            occupation:this.data.occupation,
            agtDependentTotal:this.convertNumberToString(this.data.agtDependentTotal),
            agtMobileNumber:this.convertNumberToString(this.data.agtMobileNumber),
            agtEmail:this.data.agtEmail
          },

          //recruit screen
          recruit:{
            agtRecruitType: this.data.agtRecruitType,
            agtRecruitId: this.data.agtRecruitId,
            agtRecruitRelation: this.data.agtRecruitRelation,
            agtLeaderType: this.data.agtLeaderType,
            agtLeaderId: this.data.agtLeaderId
          },

          //new screen
          new:{},
        }

      this._handleTextInputChange = (name,value) =>{
        if(name==="document"){
          this.files=value;
          console.warn(JSON.stringify(this.files))
        }else{
          this.setState({[name]:value})
        }
       }

       this._setTabNav = (nav) => {
         this.state.tabNav = nav.nav
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
            console.warn('result : '+JSON.stringify(res))
            this.onPressCancel()
          });
        }
      }else if(this.type==='detail'){
        let data = {
          id: this.data.id,
          agtVersion: this.data.agtVersion,
          agtCreateBy:this.data.agtCreateBy,
          agtSubmitted: true,
          ...this.state.personal,
          ...this.state.experience,
          ...this.state.recruit
        }

        //bypass validasi
  //      this.submit(data)
  
        if(informationValidator(data)){
          console.warn('INFORMATION : CORRECT')
          if(bankingValidator(data)){
            console.warn('Banking validator corect')
            if(documentValidator(this.files)){
              console.warn('document validaator corect')
              console.warn('all validator success')
              this.submit(data)
            }else{
              console.warn('document error')
              this.state.tabNav.navigate('Document')
            }
          }else{
            this.state.tabNav.navigate('ExperienceAndBanking')
          }
        }else {
          console.warn('Information NOT VALID')
          console.warn(data)
          this.state.tabNav.navigate('Personal')
        }

      }else{
        console.warn("Submit clicked")
      }
    }

    submit(data){
      data = this.checkApproval(data)

      console.warn('aprv : '+data.agtApproval1+'\nleadertype:'+data.agtLeaderType);

      this.uploadFile(data)

      /*updateAgent(global.token, data).then((res) => {
        console.warn('result : '+JSON.stringify(res))
        this.uploadFile(this.data,res)
      });*/
    }

    uploadFile(data){
      updateAgentFiles(global.token,data.id, this.files,data).then((res) => {
        console.warn('result files: '+JSON.stringify(res))
        console.warn(res.id)
        if(res.id){
          this.delete()
        }
      });
    }

    delete(){
      //this.onPressCancel()

      console.warn('mendelete '+this.state.id);
      deleteAgent(global.token,this.state.id).then((res)=>{
        console.warn('del : '+JSON.stringify(res))
        this.onPressCancel()
      })
    }

    checkApproval(data){
      level = this.state.personal.level.lvlName
      user = global.user
      data.agtApproval1 = true
      data.status = statusSubmitted
      if(user.level=='FC'){
        data.agtApproval1 = false
        data.status = statusApproval
        switch(level){
          case 'FC': //BM
            data.agtLeaderType=user.leader.level
            data.agtLeaderId=user.leader.agentCode
          break;
          default: //BD
            data.agtLeaderType=user.leader.leader.level
            data.agtLeaderId=user.leader.leader.agentCode
          break;
        }
      }else if(user.level==='BM'){
        data.agtApproval1 = false
        data.status = statusApproval
        switch(level){
          case 'FC': //APPROVED
            data.agtApproval1 = true
            data.status = statusSubmitted
            data.agtLeaderType=user.level
            data.agtLeaderId=user.agentCode
          break;
          default: //BD
            data.agtLeaderType=user.leader.level
            data.agtLeaderId=user.leader.agentCode
          break;
        }
      }else if(user.level==='ABD'){

      }else if(user.level==='BD'){
        data.agtApproval1 = true
        data.status = statusSubmitted
      }
      return data
    }

    onPressCancel (){
      this.props.navigation.dispatch(NavigationActions.back())
    }

    _renderTab(){
      
      if(this.type==='detail'){
        return (
          <DetailTabNavigator screenProps={{data:this.data, state:this.state, textInputHandler:this._handleTextInputChange, setTabNav:this._setTabNav}}/>
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