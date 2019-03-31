import React,{Component} from 'react';
import {View,Text,Image,Alert} from 'react-native';
import {Form, Input, Item, Icon, Button} from 'native-base';
import { NavigationActions, StackActions } from 'react-navigation'

import styles,{color} from './login.style.js';
import MainBody from '../../component/mainBody/mainBody.js'

import { LevelDb} from '../../model/realm/levelDb.js';
import { BranchDb} from '../../model/realm/branchDb.js';
import { CityDb} from '../../model/realm/cityDb.js';
import { ReligionDb} from '../../model/realm/religionDb.js';
import { EducationDb} from '../../model/realm/educationDb.js';
import { OccupationDb} from '../../model/realm/occupationDb.js';
import { StatusDb} from '../../model/realm/statusDb.js';
import { UserDb} from '../../model/realm/userDb.js';
import { SelectionDb} from '../../model/realm/selectionDb.js';



import {updateToken,authToken ,agentLogin, postBranches, deleteBranches, getDetailUser} from '../../services/webservice/authService.js'
import { getAllService } from '../../services/webservice/getService.js';
import { BankDb } from '../../model/realm/bankDb.js';
import { LoadingDialog } from '../../helper/popup/loading.js';
import {popUpError} from '../../helper/popup/alert.js';
import { agentDb } from '../../model/realm/agentDb.js';

export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        
        this.levelDb = new LevelDb()
        this.branchDb = new BranchDb()
        this.cityDb = new CityDb()
        this.religionDb = new ReligionDb()
        this.educationDb = new EducationDb()
        this.occupationDb = new OccupationDb()
        this.statusDb = new StatusDb()
        this.bankDb = new BankDb()
        this.userDb = new UserDb()
        this.selectionDb = new SelectionDb();

        this.userDb.deleteAll()
        
        this._handleTextInputChange = (event, name) =>{
            this.changeState(name,event)
          }
          
        this.changeState= (name,value)=>{
            this.setState({[name]:value},()=>{
            })
        }

        this.state = {
            username:'68000035',
            password:'password',
            isLoading: false
        }

        this.serviceCount=0;
    }

    authSuccess(tkn){
        global.token= tkn;

        getAllService(global.token,'levels').then((res) => {
            this.levelDb.deleteAll();
            this.levelDb.insertAll(res);
            this.countAllServices()
            });
    
        getAllService(global.token,'branches').then((res) => {
            this.branchDb.deleteAll()
            this.branchDb.insertAll(res)
            this.countAllServices()
        })

        getAllService(global.token,'cities').then((res) => {
            this.cityDb.deleteAll()
            this.cityDb.insertAll(res)
            this.countAllServices()
        })

        getAllService(global.token,'religions').then((res) => {
            this.religionDb.deleteAll()
            this.religionDb.insertAll(res)
            this.countAllServices()
        })

        getAllService(global.token,'educations').then((res) => {
            this.educationDb.deleteAll()
            this.educationDb.insertAll(res)
            this.countAllServices()
        })

        getAllService(global.token,'occupations').then((res) => {
            this.occupationDb.deleteAll()
            this.occupationDb.insertAll(res)
            this.countAllServices()
        })

        getAllService(global.token,'statuses').then((res)=>{
            this.statusDb.deleteAll()
            this.statusDb.insertAll(res)
            this.countAllServices()
        })

        getAllService(global.token,'banks').then((res)=>{
            this.bankDb.deleteAll()
            this.bankDb.insertAll(res)
            this.countAllServices()
        })

        getDetailUser(global.token,this.state.username).then((res)=>{
          if(res.usrAgentCode){
            global.user = res
          }
          this.countAllServices()
        })

        getAllService(global.token,'selections').then((res)=>{
          global.selections = res
          this.selectionDb.deleteAll()
          this.selectionDb.insertAll(res)
          this.countAllServices()
        })
    
    }

    countAllServices(){
        this.serviceCount++;
        if(this.serviceCount>=10){
            console.warn('success')
            this.showLoadingDialog(false)
            this.navigateToMainApp()
            console.warn()
        }
    }

    navigateToMainApp(){
        resetAction = StackActions.reset({
            index: 0,
            key: null,
            //actions: [NavigationActions.navigate({ routeName: 'BusinessOpportunity'})]
            actions: [NavigationActions.navigate({ routeName: 'LeadManagement'})]
        })
        this.props.navigation.dispatch(resetAction)
    }

    showLoadingDialog(show){
        this.changeState("isLoading",show)
    }

    _ButtonOnPress = () => {

        this.showLoadingDialog(true)
  
        authToken(this.state.username,this.state.password).then((res) => {
            console.warn(res)
            if(res.id_token){
              this.authSuccess(res.id_token)
            }else if(res.status==401){
              this.showLoadingDialog(false)
              popUpError("Error","Username/Password salah")
            }else if(res.status==500){
              this.showLoadingDialog(false)
              popUpError("Error","Internal Server Error")
            }
            else{
                this.showLoadingDialog(false)
                popUpError("Error","Unknown Error")
            }
        })
        
    }

  
    render()
    {
        return(
            <View style={styles.mainContainer}>            
             <View style={styles.header}>
                <Image style={styles.imageTitle} source={require('../../../resource/image/title_white.png')}/>
            </View>
                <MainBody source={require('../../../resource/image/bg.jpg')} style={styles.mainBody}>
                
        <View style={styles.loginContainer}>
            <Text style={styles.loginTextTitle}>SIGN IN</Text>
            <Form style={styles.loginForm}> 
                <Item style={styles.formItem}>
                    <Icon style={styles.inputIcon} name='person' type='MaterialIcons'/>
                    <Input placeholderTextColor={color.White} style={styles.input} placeholder="Agent Code" 
                        value={this.state.username}
                        onChangeText={(e) => this._handleTextInputChange(e,'username')}/>
                </Item>
                <Item style={styles.formItem}>
                    <Icon style={styles.inputIcon} name='lock-open' type='MaterialIcons'/>
                    <Input placeholderTextColor={color.White} style={styles.input} placeholder="Password" secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={(e) => this._handleTextInputChange(e,'password')}/>
                </Item>
            </Form>
            <Button bordered transparent style={styles.loginButton} onPress={this._ButtonOnPress}>
                <Text style={styles.loginText}>LOGIN</Text>
            </Button>
        </View>

                </MainBody>
                { 
                    (this.state.isLoading) && <LoadingDialog/>
                }
            </View>
        )
    }
}