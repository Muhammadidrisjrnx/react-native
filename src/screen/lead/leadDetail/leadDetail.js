import React,{Component} from 'react';
import {NetInfo,ToastAndroid, View, Text, TouchableOpacity,ScrollView,TouchableWithoutFeedback,Platform} from 'react-native';
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
import { postAgent, newAgent, updateAgent, updateAgentFiles, deleteAgent, checkKtp, updateDocument, checkEmailNumber } from '../../../services/webservice/agentService';
import newInformationScreen from './new/newInformationScreen.js';
import { newValidator, detailValidator, informationValidator, bankingValidator, documentValidator, experienceBankingValidator } from '../../../helper/validator.js';
import { statusApproval, statusSubmitted, SUBMITTABLESTATUS, PENDINGSTATUS } from '../../../helper/status.js';
import { LoadingDialog } from '../../../component/popup/loading.js';
import { popUpError } from '../../../component/popup/error.js';
import { agentDb } from '../../../model/realm/agentDb.js';
import { branchDb } from '../../../model/realm/branchDb.js';
import {getAgentSelection, createAgentSelection} from '../../../services/webservice/agentService';

export default class LeadDetail extends Component{

    constructor(props){
        super(props);
        
        this.data = this.props.navigation.getParam('data',[])
        this.type = this.props.navigation.getParam('type','new')
        
        
        this.files = {}

        console.warn("global user "+ JSON.stringify(global.user))

        if(this.data.branch==null && global.user.usrBranchCode!=null){
          bra = branchDb.getByCode(global.user.usrBranchCode)
          this.data.branch = branchDb.getByCode(global.user.usrBranchCode)
          //console.warn("BRANCH : "+JSON.stringify(bra))
        }
        
        this.state = {
          //experience screen
          id:this.data.id,
          tabNav: {},
          isLoading: false,

          /*
            "agtExInsuranceCompany": null,
            "agtExInsuranceResignDate": null,
            "agtExAajiExpired": null,
            "agtAajiNo": null,
            "agtBankAccountNo": null,
            "agtBankAccountName": null,
            "agtTaxId": null */

          experience:{
            occupation:this.data.occupation,
            agtExInsuranceCompany: this.data.agtExInsuranceCompany,
            agtExInsuranceResignDate: this.data.agtExInsuranceResignDate,
            agtExAajiExpired: this.data.agtExAajiExpired,
            agtAajiNo: this.data.agtAajiNo,
            bank: this.data.bank,
            agtBankAccountNo:this.data.agtBankAccountNo,
            agtBankAccountName: this.data.agtBankAccountName,
            agtTaxId: this.data.agtTaxId,
            agtLeaderExp: this.data.agtLeaderExp,
            agtCommissionIncome: this.data.agtCommissionIncome,
            agtORIncome: this.data.agtORIncome
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
            agtAddr3: this.data.agtAddr3,
            agtDistrict: this.data.agtDistrict,
            city: this.data.city,
            agtIdCardNo: this.convertNumberToString(this.data.agtIdCardNo),
            agtSex:this.data.agtSex,
            education:this.data.education,
            religion:this.data.religion,
            agtDob:this.data.agtDob,
            agtJoinDate:this.data.agtJoinDate,

            agtMaritalStatus: this.data.agtMaritalStatus,
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

          selection:{},
        }
      
      this.getSelectionData();

      this._setState = (name,value) =>{
        this.setState({[name]:value})
      }

        

        this._handleTextInputChange = (name,value) =>{
          if(name==="document"){
            this.files=value;
            //console.warn(JSON.stringify(this.files))
          }else{
            this.setState({[name]:value})
          }
        }

        this._setTabNav = (nav) => {
          this.state.tabNav = nav.nav
        }

        this.handleConnectivityChange = (isConnected) => {
          this.setState({ isConnected })
        }
    }

    

    componentDidMount() {
      NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    }

    componentWillUnmount() {
      NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    }

    getSelectionData = () => {
      getAgentSelection(global.token, this.data.id).then((res)=>{
        this.dataSelection = res;
        
        let SECTIONS = [];

        for(i =0 ; i< global.selections.length;i++){
          let value = res.filter((item)=>{
              return item.selection.id == global.selections[i].id;
           })

          SECTIONS[i] = {
          'id': String(global.selections[i].id),
          'title': global.selections[i].selectionCategory,
          'value': value.length > 0 ? value[0].agtSelScore : 0
          };
        }

        this.setState({
          selection:SECTIONS,
        });

      });
    }

    saveSelectionData = (data) =>{
      let selection = this.state.selection;
      let finalData = [];

      for (let i = 0; i < selection.length; i++) {
        let sel = global.selections.filter((item) => {
          return item.id == selection[i].id;
        });

        finalData.push({
          'id': null,
          'agtSelVersion':0,
          'agtSelUpdateDate':'',
          'agtSelUpdateBy':data.id,
          'agtSelScore':selection[i].value,
          'agtSelRemark':'',
          'agent':data,
          'selection':sel
        })
      }

      createAgentSelection(global.token, finalData).then((res)=>{
        console.warn('result : '+JSON.stringify(res));
        if(res.id){
          this.delete()
        }else{
          this.showLoadingDialog(false);
          popUpError("Error","Terjadi Kesalahan")
        }
      });
      console.warn(JSON.stringify(finalData));
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

    dataPacker(){
      let data = {
        id: this.data.id,
        agtVersion: this.data.agtVersion,
        agtCreatedDate:this.data.agtCreatedDate,
        agtCreateBy:this.data.agtCreateBy,
        agtSubmitted: true,
        ...this.state.personal,
        ...this.state.experience,
        ...this.state.recruit
      }

      //personal
      delete data.isBirthDatePickerVisible
      delete data.isJoinDatePickerVisible
      delete data.drop_level
      delete data.drop_religion
      delete data.drop_education
      delete data.drop_city
      delete data.drop_branch

      //experience
      delete data.isResignDatePickerVisible
      delete data.isExpiredDatePickerVisible
      delete data.drop_bank
      delete data.drop_leader
      delete data.drop_occupation

      return data
    }

    onPressSave (){
      this.saveDetail(this.dataPacker())
    }

    onPressSubmit() {
      if(this.type==='new'){
        let data = this.state.new
        if(newValidator(data)){
          this.submitNew(data)
        }
      }else if(this.type==='detail'){
        if(!this.isSubmittable() && !this.isPending()) return

       data = this.dataPacker()
        

/*/ BYPASS VALIDASI /
      this.submitDetail(data) //*/
  //* JALUR YANG BENAR  /
        if(informationValidator(data)){
          console.warn('INFORMATION : CORRECT')
          if(experienceBankingValidator(data)){
            console.warn('Experience Banking validator corect')
            if(documentValidator(this.files) || this.isPending()){
              console.warn('document validaator corect')
              console.warn('all validator success')
              this.submitDetail(data)
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
        }                                                     //*/
      }else{
        console.warn("NOT NEW AND DETAIL")
      }
    }

    changeState= (name,value)=>{
      this.setState({[name]:value},()=>{
      })
    }

    showLoadingDialog(show){
      this.changeState("isLoading",show)
    }

    submitNew(data){
      this.showLoadingDialog(true)

      data.agtName = data.agtName.toUpperCase()
      data.agtEmail = data.agtEmail.toUpperCase()

      checkEmailNumber(global.token,data.agtEmail,data.agtMobileNumber).then((res)=>{
        this.showLoadingDialog(false)
        if(res==="false"){
          console.warn("MOBILE NUMBER & EMAIL OK");
          this.createNew(data)
        }else if(res==="true"){
          this.showLoadingDialog(false)
          popUpError("Error","Email/No.HP sudah terdaftar")
        }else{
          this.showLoadingDialog(false)
          popUpError("Error","Tidak dapat mensubmit")
        }
      });
    }

    createNew(data){
      newAgent(global.token, data).then((res) => {
        console.warn('result : '+JSON.stringify(res))
        this.showLoadingDialog(false)
        if(res.id){
          this.onPressCancel()              
        }else{
          popUpError("Error","Terjadi Kesalahan")
        }
      });
    }

    submitDetail(data){
      this.showLoadingDialog(true)
      
      data = this.checkApproval(data)
      data = this.capitalize(data)

      console.warn('aprv : '+data.agtApproval1+'\nleadertype:'+data.agtLeaderType);

      if(this.isPending()){
        //harus update
        this.updateFile(data)
      }else{
        /*/NO CHECK KTP
        this.uploadFile(data) //*/

        //*/ CHECK KTP DULU
        checkKtp(global.token,data.agtIdCardNo,data.agtDob).then((res)=>{
          console.warn("CEK KTP : "+JSON.stringify(res))
          if(res==="false"){ //MASHOOK
            console.warn("KTP OK");  
            this.uploadFile(data)
          }else if(res==="true"){
            this.showLoadingDialog(false)
            popUpError("Error","KTP sudah terdaftar")
          }else{
            this.showLoadingDialog(false)
            popUpError("Error","Terjadi Kesalahan Pada Server")
          }
        })//*/
      }
    }

    saveDetail(data){
      this.showLoadingDialog(true)

      data = this.capitalize(data)

      console.warn(data)

      db = agentDb

      updateAgent(global.token, data).then((res) => {
        console.warn("trying to delete : "+data.id)
        console.warn("length : "+db.getAll().length)
        this.showLoadingDialog(false)
        this.onPressCancel()
      })
    }

    uploadFile(data){
      updateAgentFiles(global.token,data.id, this.files,data).then((res) => {
        console.warn('result files: '+JSON.stringify(res))
        console.warn(res.id)
        if(res.id){ //MASHOOK
          this.saveSelectionData(res)          
        }
      }).catch((error)=>{
        this.showLoadingDialog(false)
        popUpError("Error","Terjadi Kesalahan saat upload dokumen")
      });
    }

    updateFile(data){
      updateDocument(global.token,data.id,this.files).then((res)=>{
        /*/ tanpa update
        this.showLoadingDialog(false)
        this.onPressCancel() //*/

        console.warn('success upload')
        
        //* dengan update
        data.status = statusSubmitted
        updateAgent(global.token,data).then((res)=>{
          this.showLoadingDialog(false)
          console.warn("RESULT : "+JSON.stringify(res))
          if(res.id){
            this.onPressCancel()
          }else{
            popUpError("Error",JSON.stringify(res))
          }
        }) //*/
      }).catch((error)=>{
        this.showLoadingDialog(false)
        popUpError("Error","Terjadi kesalahan saat ")
      })
    }

    delete(){
      //this.onPressCancel()

      console.warn('mendelete '+this.state.id);
      deleteAgent(global.token,this.state.id).then((res)=>{ //MASHOOK
        console.warn('del : '+JSON.stringify(res))
        this.showLoadingDialog(false)
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

    capitalize(data){
      //personal
      data.agtName = data.agtName ? data.agtName.toUpperCase() : ''
      data.agtPob = data.agtPob? data.agtPob.toUpperCase() : ''
      data.agtAddr1 = data.agtAddr1? data.agtAddr1.toUpperCase() : ''
      data.agtAddr2 = data.agtAddr2? data.agtAddr2.toUpperCase() : ''
      data.agtDistrict = data.agtDistrict? data.agtDistrict.toUpperCase() : ''
      data.agtIdCardNo = data.agtIdCardNo? data.agtIdCardNo.toUpperCase() : ''
      data.agtEmail = data.agtEmail? data.agtEmail.toUpperCase(): ''

      //experience&banking
      data.agtExInsuranceCompany = data.agtExInsuranceCompany? data.agtExInsuranceCompany.toUpperCase():''
      data.agtAajiNo = data.agtAajiNo? data.agtAajiNo.toUpperCase():''
      data.agtBankAccountName = data.agtBankAccountName? data.agtBankAccountName.toUpperCase():''

      //recruit
      data.agtRecruitRelation = data.agtRecruitRelation? data.agtRecruitRelation.toUpperCase():''

      return data
    }

    onPressCancel (){
      this.props.navigation.dispatch(NavigationActions.back())
    }

    _renderTab(){
      
      if(this.type==='detail'){
        return (
          <DetailTabNavigator
            screenProps={{
              data:this.data,
              state:this.state,
              textInputHandler:this._handleTextInputChange,
              setTabNav:this._setTabNav,
              isSubmittable:this.isSubmittable(),
              isPending:this.isPending(),
              setScreenState:this._setState}}/>
        )
      }else{
        return(
          <NewTabNavigator screenProps={{data:this.data, state:this.state, textInputHandler:this._handleTextInputChange}}/>
        )
      }
    }

    isSubmittable(){
      if(this.type==='detail')
        return SUBMITTABLESTATUS.includes(this.data.status.id)
      else return true
    }

    isPending(){
      if(this.type==='detail')
        return this.data.status.id===PENDINGSTATUS
      else
        return false
    }

    showSave(){
      if(this.type==='new'){
        return false
      }else return true
    }

    render(){
        
        //ToastAndroid.show(data.agt_name, ToastAndroid.SHORT);
        return(
            <View style={{flex:1}}>
                {this._renderTab()}
                <View style={styles.buttonContainer}>
                { this.showSave() && (
                    <TouchableOpacity style={[styles.buttonOpac,{flex:1}, this.isSubmittable()?'':styles.buttonDisabled ]} onPress={()=>this.onPressSave()}>
                        <Text style={[styles.buttonText, {color:defaultColor.White}]}>
                            Save
                        </Text>
                    </TouchableOpacity>)}
                    <TouchableOpacity style={[styles.buttonOpac,{flex:2,marginHorizontal:verticalScale(15)}, this.isSubmittable() || this.isPending()?'':styles.buttonDisabled]} onPress={()=>this.onPressSubmit()}>
                        <Text style={[styles.buttonText, {color:defaultColor.White}] }>
                            Submit
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonOpac,{flex:1} ]} onPress={()=>this.onPressCancel()}>
                        <Text style={[styles.buttonText,  {color:defaultColor.White}]}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                </View>

                { 
                    (this.state.isLoading) && <LoadingDialog/>
                }
              
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