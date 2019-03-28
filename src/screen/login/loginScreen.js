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


import {updateToken,authToken ,agentLogin, postBranches, deleteBranches, getDetailUser} from '../../services/webservice/authService.js'
import { getAllService } from '../../services/webservice/getService.js';
import { BankDb } from '../../model/realm/bankDb.js';
import { LoadingDialog } from '../../component/popup/loading.js';
import { popUpError } from '../../component/popup/error.js';
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
    }

    countAllServices(){
        this.serviceCount++;
        if(this.serviceCount>=9){
            console.warn('success')
            this.showLoadingDialog(false)
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
        )
        
            {
                (this.state.isLoading == true) && <LoadingDialog/> 
            }
        */
        
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


const BRANCHES = [
    {
      "brcCode": "A01",
      "brcName": "AG-MEDAN GALAXY"
    },
    {
      "brcCode": "A02",
      "brcName": "AG-MEDAN GALAXY 2"
    },
    {
      "brcCode": "A05",
      "brcName": "AG-MEDAN GALAXY 5"
    },
    {
      "brcCode": "A06",
      "brcName": "AG-MEDAN PREMIER PROVIDENCE"
    },
    {
      "brcCode": "AA1",
      "brcName": "AG-PEKALONGAN MONEY SMART"
    },
    {
      "brcCode": "AB1",
      "brcName": "AG-BANDA ACEH GALAXY"
    },
    {
      "brcCode": "AB2",
      "brcName": "AG-LANGSA GALAXY"
    },
    {
      "brcCode": "AC1",
      "brcName": "AG-BINJAI GALAXY"
    },
    {
      "brcCode": "AD1",
      "brcName": "AG-PEMATANG SIANTAR GALAXY"
    },
    {
      "brcCode": "AF1",
      "brcName": "AG-JEMBER GALAXY"
    },
    {
      "brcCode": "AF2",
      "brcName": "AG-JEMBER GALAXY BLESSING"
    },
    {
      "brcCode": "AG1",
      "brcName": "AG-LOMBOK ONE VISION"
    },
    {
      "brcCode": "AJ1",
      "brcName": "AG-SIDOARJO GALAXY"
    },
    {
      "brcCode": "AJ2",
      "brcName": "AG-SIDOARJO GALAXY PURI SURYA"
    },
    {
      "brcCode": "AL1",
      "brcName": "AG-PONTIANAK GALAXY"
    },
    {
      "brcCode": "AM2",
      "brcName": "AG-JAYAPURA GALAXY"
    },
    {
      "brcCode": "AM3",
      "brcName": "AG-MERAUKE ULTIMATE INC."
    },
    {
      "brcCode": "AP1",
      "brcName": "AG-PADANG GALAXY"
    },
    {
      "brcCode": "AQ2",
      "brcName": "AG-PROBOLINGGO GALAXY 2"
    },
    {
      "brcCode": "AR1",
      "brcName": "AG-PALEMBANG GALAXY"
    },
    {
      "brcCode": "AR3",
      "brcName": "AG-PALEMBANG ALL STARS"
    },
    {
      "brcCode": "AS2",
      "brcName": "AG-CIREBON GALAXY"
    },
    {
      "brcCode": "AS3",
      "brcName": "AG-CIREBON HEADQUARTERS"
    },
    {
      "brcCode": "AS5",
      "brcName": "AG-CIREBON INFINITE"
    },
    {
      "brcCode": "AV1",
      "brcName": "AG-MOJOKERTO GALAXY"
    },
    {
      "brcCode": "AV2",
      "brcName": "AG-MOJOKERTO ONE VISION"
    },
    {
      "brcCode": "AX2",
      "brcName": "AG-SOLO EAGLE PROVIDENCE"
    },
    {
      "brcCode": "AX3",
      "brcName": "AG-SOLO GOLDEN EAGLE GALAXY"
    },
    {
      "brcCode": "AY1",
      "brcName": "AG-PANGKAL PINANG GALAXY"
    },
    {
      "brcCode": "AZ1",
      "brcName": "AG-MADIUN GALAXY"
    },
    {
      "brcCode": "B02",
      "brcName": "AG-JAKARTA GALAXY"
    },
    {
      "brcCode": "B03",
      "brcName": "AG-JAKARTA UPN"
    },
    {
      "brcCode": "B05",
      "brcName": "AG-ASURANSIKU JAKARTA"
    },
    {
      "brcCode": "B08",
      "brcName": "AG-JAKARTA MONEY SMART"
    },
    {
      "brcCode": "B10",
      "brcName": "AG-JAKARTA GALAXY YOUNGDYNAMIC"
    },
    {
      "brcCode": "B11",
      "brcName": "AG-JAKARTA GALAXY 4"
    },
    {
      "brcCode": "B16",
      "brcName": "AG-JAKARTA GALAXY 7"
    },
    {
      "brcCode": "B17",
      "brcName": "AG-JAKARTA UPN 3"
    },
    {
      "brcCode": "B18",
      "brcName": "AG-JAKARTA GALAXY 8"
    },
    {
      "brcCode": "B21",
      "brcName": "AG-JAKARTA ULTIMATE INC."
    },
    {
      "brcCode": "B22",
      "brcName": "AG-JAKARTA STAR PROVIDENCE"
    },
    {
      "brcCode": "B25",
      "brcName": "AG-JAKARTA GALAXY 10"
    },
    {
      "brcCode": "B27",
      "brcName": "AG-JAKARTA GPA"
    },
    {
      "brcCode": "B28",
      "brcName": "AG-JAKARTA GALAXY PRIME"
    },
    {
      "brcCode": "B29",
      "brcName": "AG-JAKARTA INFINITE"
    },
    {
      "brcCode": "B30",
      "brcName": "AG-JAKARTA GALAXY WILDGEESE"
    },
    {
      "brcCode": "BA1",
      "brcName": "AG-SUMBAWA ONE VISION"
    },
    {
      "brcCode": "BB1",
      "brcName": "AG-JTO BENGKULU GALAXY"
    },
    {
      "brcCode": "BC1",
      "brcName": "AG-MAGELANG EXCELL PROVIDENCE"
    },
    {
      "brcCode": "BD1",
      "brcName": "AG-CIANJUR GALAXY FAVOR"
    },
    {
      "brcCode": "BE1",
      "brcName": "AG-PURWOREJO MONEY SMART"
    },
    {
      "brcCode": "C01",
      "brcName": "AG-SURABAYA GALAXY"
    },
    {
      "brcCode": "C02",
      "brcName": "AG-SURABAYA HEADQUARTERS"
    },
    {
      "brcCode": "C05",
      "brcName": "AG-SURABAYA GALAXY 2"
    },
    {
      "brcCode": "C06",
      "brcName": "AG-SURABAYA GALAXY 3"
    },
    {
      "brcCode": "C08",
      "brcName": "AG-SURABAYA GALAXY 4"
    },
    {
      "brcCode": "C09",
      "brcName": "AG-SURABAYA SPIRIT OF CHANGE"
    },
    {
      "brcCode": "C10",
      "brcName": "AG-SURABAYA STAR PROVIDENCE"
    },
    {
      "brcCode": "C11",
      "brcName": "AG-SURABAYA ONE VISION"
    },
    {
      "brcCode": "C12",
      "brcName": "AG-SURABAYA GALAXY 5"
    },
    {
      "brcCode": "C15",
      "brcName": "AG-SURABAYA MONEY SMART"
    },
    {
      "brcCode": "C17",
      "brcName": "AG-SURABAYA GALAXY SATU"
    },
    {
      "brcCode": "C18",
      "brcName": "AG-SURABAYA INFINITE"
    },
    {
      "brcCode": "D01",
      "brcName": "AG-ASURANSIKU MANADO"
    },
    {
      "brcCode": "D03",
      "brcName": "AG-MANADO ONE VISION"
    },
    {
      "brcCode": "E01",
      "brcName": "AG-BATAM GALAXY"
    },
    {
      "brcCode": "G01",
      "brcName": "AG-PEKANBARU GALAXY"
    },
    {
      "brcCode": "G02",
      "brcName": "AG-PEKANBARU GALAXY 2"
    },
    {
      "brcCode": "G03",
      "brcName": "AG-DUMAI GALAXY GROW VISION"
    },
    {
      "brcCode": "I01",
      "brcName": "AG-MAKASSAR GALAXY"
    },
    {
      "brcCode": "I02",
      "brcName": "AG-MAKASSAR MONEY SMART"
    },
    {
      "brcCode": "I05",
      "brcName": "AG-MAKASSAR GALAXY 3"
    },
    {
      "brcCode": "K02",
      "brcName": "AG-BANDUNG MIRACLE GALAXY"
    },
    {
      "brcCode": "K04",
      "brcName": "AG-BANDUNG GALAXY 2"
    },
    {
      "brcCode": "K05",
      "brcName": "AG-BANDUNG GALAXY 3"
    },
    {
      "brcCode": "K07",
      "brcName": "AG-BANDUNG SPIRIT OF CHANGE"
    },
    {
      "brcCode": "L02",
      "brcName": "AG-MALANG GALAXY 2"
    },
    {
      "brcCode": "L03",
      "brcName": "AG-MALANG SMART VISION"
    },
    {
      "brcCode": "L05",
      "brcName": "AG-GALAXY PASTI MALANG"
    },
    {
      "brcCode": "L06",
      "brcName": "AG-MALANG INFINITE"
    },
    {
      "brcCode": "M01",
      "brcName": "AG-SEMARANG HEADQUARTERS"
    },
    {
      "brcCode": "M03",
      "brcName": "AG-SEMARANG MONEY SMART"
    },
    {
      "brcCode": "M06",
      "brcName": "AG-SEMARANG GALAXY"
    },
    {
      "brcCode": "M07",
      "brcName": "AG-SEMARANG GALAXY 2"
    },
    {
      "brcCode": "N01",
      "brcName": "AG-JAMBI GALAXY"
    },
    {
      "brcCode": "O01",
      "brcName": "AG-BANJARMASIN MONEY SMART"
    },
    {
      "brcCode": "Q03",
      "brcName": "AG-DENPASAR GALAXY"
    },
    {
      "brcCode": "Q06",
      "brcName": "AG-DENPASAR UPN"
    },
    {
      "brcCode": "Q07",
      "brcName": "AG-DENPASAR ONE VISION"
    },
    {
      "brcCode": "R02",
      "brcName": "AG-PALANGKARAYA PHOENIX INC"
    },
    {
      "brcCode": "S01",
      "brcName": "AG-KUPANG GALAXY"
    },
    {
      "brcCode": "T01",
      "brcName": "AG-BALIKPAPAN MONEY SMART"
    },
    {
      "brcCode": "T02",
      "brcName": "AG-BALIKPAPAN GALAXY"
    },
    {
      "brcCode": "T05",
      "brcName": "AG-BALIKPAPAN GALAXY 3"
    },
    {
      "brcCode": "V01",
      "brcName": "AG-YOGYAKARTA GALAXY"
    },
    {
      "brcCode": "V02",
      "brcName": "AG-YOGYAKARTA GALAXY ORGANIC"
    },
    {
      "brcCode": "V03",
      "brcName": "AG-YOGYAKARTA GALAXY 3"
    },
    {
      "brcCode": "V04",
      "brcName": "AG-YOGYAKARTA GALAXY 4"
    },
    {
      "brcCode": "V05",
      "brcName": "AG-YOGYAKARTA SPIRIT OF CHANGE"
    },
    {
      "brcCode": "V77",
      "brcName": "AG-YOGYAKARTA HASANAH JARIYAH"
    },
    {
      "brcCode": "W03",
      "brcName": "AG-GALAXY PASTI LAMPUNG"
    },
    {
      "brcCode": "X01",
      "brcName": "AG-TASIKMALAYA GALAXY"
    },
    {
      "brcCode": "Y01",
      "brcName": "AG-SAMARINDA GALAXY"
    },
    {
      "brcCode": "Y02",
      "brcName": "AG-SAMARINDA MONEY SMART"
    },
    {
      "brcCode": "Y03",
      "brcName": "AG-GALAXY PASTI SAMARINDA"
    },
    {
      "brcCode": "Z02",
      "brcName": "AG-TANGERANG HEADQUARTERS"
    }
   ]