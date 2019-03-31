import React,{Component} from 'react';
import {ToastAndroid,Image, View, Text, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator  } from 'react-navigation';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

import ThumbImage from '../../../component/thumbImage/thumbimage.js'

import styles,{defaultColor} from './agentApprovalDetail.style.js';

import moment from "moment"

export default class QualificationInformationScreen extends Component {

    constructor(props){
        super(props)
        this.data =this.props.screenProps.data
    }

    checkAge(){
        if(!this.data.agtDob) return false

        lvl = this.data.level.lvlName
        age = moment().diff(this.data.agtDob, 'years',false)
        qualified = true
        
        switch(lvl){
            case 'FC':
            if(age<17) qualified=false
            break;
            case 'BM':
            if(age<22) qualified=false
            break;
            case 'ABD':
            if(age<22) qualified=false
            break;
            case 'BD':
            if(age<26) qualified=false
            break;
        }

        return qualified
    }

    checkEducation(){
        if(!this.data.education) return false

        edu = this.data.education.eduName
        lvl = this.data.level.lvlName
        if(edu==="SD" || edu==="SMP") return false
        if(edu==="SMA"){
            if(lvl === "ABD" || lvl === "BD"){
                return false
            }else{
                return true
            }
        }else{
            return true
        }
    }

    checkOccupation(){
        if(!this.data.occupation) return false

        ocu = this.data.occupation.ocuId
        lvl = this.data.level.lvlName
        if(ocu == 2151 || ocu == 2152){ //INSURANCE OR NON INSURANCE
            return true
        }else{
            if(lvl === "FC"){
                return true
            }else{
                return false
            }
        }
    }

    checkExInsurance(){
        if(!this.data.occupation) return false

        ocu = this.data.occupation.ocuId
        lvl = this.data.level.lvlName
        if(ocu == 2151){ //INSURANCE 
            return true
        }else if(ocu == 2152){ //NON INSURANCE
            if(lvl === "FC"){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }

    checkLeaderExperience(){
        if(!this.data.agtLeaderExp) return false

        leaderExp = this.data.agtLeaderExp
        lvl = this.data.level.lvlName

        result = true;

        switch(leaderExp){
            case "BELUM PERNAH" : 
            if(lvl!=="FC"){
                result = false
            }
            break;
            case "< 3 TAHUN":
            if(lvl==="ABD" || lvl==="BD"){
                result = false
            }
            break;
            case "> 3 TAHUN":
            result = true
            break;
            default: result =false;
            break;
        }

        return result
    }

    checkIncome(){
        if(!this.data.agtORIncome) return false

        lvl = this.data.level.lvlName
        income = this.data.agtORIncome

        result = true;
        switch(lvl){
            case 'BM':
                result = (income>=5000000);
            break;
            case 'ABD': 
                result = (income>=5000000);
            break;
            case 'BD':
                result = (income>=10000000);
            break;
        }
    }

    renderQualified(title){
        return(
            <View style={styles.itemContainer}>
                <Text style={styles.itemDetail}>{title}</Text>
                <Text style={[styles.itemDetail,{textAlign:'right'}]}></Text>
                <Icon iconStyle={[styles.itemDetail,styles.qualified]} type="font-awesome" name={'check-circle'}></Icon>
            </View>
        )
    }

    renderNotQualified(title){
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemDetail}>{title}</Text>
                <Text style={[styles.itemDetail,{textAlign:'right'}]}></Text>
                <Icon iconStyle={[styles.itemDetail,styles.unqualified]} type="font-awesome" name={'times-circle'}></Icon>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.tabContainer}>
                {this.checkAge()?this.renderQualified('Usia'):this.renderNotQualified('Usia')}
                {this.checkEducation()?this.renderQualified('Pendidikan'):this.renderNotQualified('Pendidikan')}
                {this.checkOccupation()?this.renderQualified('Pengalaman Kerja'):this.renderNotQualified('Pengalaman Kerja')}
                {this.checkExInsurance()?this.renderQualified('Pengalaman Agen Asuransi'):this.renderNotQualified('Pengalaman Agen Asuransi')}
                {this.checkLeaderExperience()?this.renderQualified('Pengalaman Leader Asuransi'):this.renderNotQualified('Pengalaman Leader Asuransi')}
                {this.checkIncome()?this.renderQualified('Pendapatan'):this.renderNotQualified('Pendapatan')}
            </View>
        );
    }
  }