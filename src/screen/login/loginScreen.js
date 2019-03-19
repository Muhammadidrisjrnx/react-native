import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
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


import {updateToken,authToken ,agentLogin} from '../../services/webservice/authService.js'
import { getAllService } from '../../services/webservice/getService.js';
import { BankDb } from '../../model/realm/bankDb.js';

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

        this.userDb.deleteAll()
        this.userDb.insert(userFc),
        this.userDb.insert(userBm)
        
        this._handleTextInputChange = (event, name) =>{
            this.changeState(name,event)
          }
          
        this.changeState= (name,value)=>{
            this.setState({[name]:value},()=>{

            })
        }

        this.state = {
            username:'68000035',
            password:''
        }

        this.serviceCount=0;
    }


    static navigationOptions = {
        header:null
    }

    authSuccess(tkn){
        global.token= tkn;

        user = {}
        switch(this.state.username){
            case '68000033': user = userBD; break;
            case '68000034': user = userBm; break;
            case '68000035': user = userFc; break;
        }
        global.user=user;

        getAllService(global.token,'levels').then((res) => {
            global.levels = res
            this.levelDb.deleteAll();
            this.levelDb.insertAll(res);
            this.countAllServices()
            });
    
        getAllService(global.token,'branches').then((res) => {
            global.branches = res
            this.branchDb.deleteAll()
            this.branchDb.insertAll(res)
            this.countAllServices()
        })

        getAllService(global.token,'cities').then((res) => {
            global.cities = res
            this.cityDb.deleteAll()
            this.cityDb.insertAll(res)
            this.countAllServices()
        })

        getAllService(global.token,'religions').then((res) => {
            global.religions = res
            this.religionDb.deleteAll()
            this.religionDb.insertAll(res)
            this.countAllServices()
        })

        getAllService(global.token,'educations').then((res) => {
            global.educations = res
            this.educationDb.deleteAll()
            this.educationDb.insertAll(res)
            this.countAllServices()
        })

        getAllService(global.token,'occupations').then((res) => {
            global.occupations = res
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
            global.banks = res
            this.bankDb.deleteAll()
            this.bankDb.insertAll(res)
            this.countAllServices()
        })
    }

    countAllServices(){
        this.serviceCount++;
        if(this.serviceCount>=8){
            this.navigateToMainApp()
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

    _ButtonOnPress = () => {
  
        authToken(this.state.username,this.state.password).then((res) => {
            if(res.id_token){
                this.authSuccess(res.id_token)
            }
        })
/*
        user = null
        switch(this.state.username){
            case 'fc':user = userFc; break;
            case 'bm':user = userBm; break;
            case 'abd':user = userABD; break;
            case 'bd':user = userBD;break;
            case 'rash':user = userRASH;break;
        }

        if(user){
            global.user = user;
            console.warn(global.user)
        }
        */
        
        /*
        getNews().then((res) => {
            console.warn(JSON.stringify(res))
        });*/ 

        /*agentLogin().then((res) => {
            console.warn(JSON.stringify(res))
        });*/
/*
        getAllService(global.token,'statuses').then((res)=>{
            statusDb.insertAll(res)
        })*/
/*
        console.warn(
            "level : "+this.levelDb.getAll().length+"\n"+
            "branch : "+this.branchDb.getAll().length+"\n"+
            "city : "+this.cityDb.getAll().length+"\n"+
            "religion : "+this.religionDb.getAll().length+"\n"+
            "education : "+this.educationDb.getAll().length+"\n"+
            "occupation : "+this.occupationDb.getAll().length+"\n"+
            "status : "+this.statusDb.getAll().length+"\n"+
            "user : "+this.userDb.getAll().length+"\n"
        )*/
        
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
            </View>
        )
    }
}


const userABD = {
    username    :'abd',
    password    :'12345',
    name        :'USER ABD',
    level       :'ABD',
    agentCode   :'ABD0002',
    directLeaderLevel:'BD',
    directLeaderName:'USER BD',
    directLeaderCode:'BD0005'
}



const userRASH = {
    username    :'rash',
    password    :'12345',
    name        :'USER RASH',
    level       :'RASH',
    agentCode   :'RASH',
    directLeaderLevel:null,
    directLeaderName:null,
    directLeaderCode:null
}

const userBD = {
    username    :'68000033',
    password    :'jason1001',
    name        :'USER BD',
    level       :'BD',
    agentCode   :'68000033',
    leader      :null
}

const userBm = {
    username    :'6800034',
    password    :'password',
    name        :'USER BM',
    level       :'BM',
    agentCode   :'68000034',
    leader      : userBD
}


const userFc = {
    username    :'68000035',
    password    :'password',
    name        :'USER FC',
    level       :'FC',
    agentCode   :'68000035',
    leader      :userBm
}