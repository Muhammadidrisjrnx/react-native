import React,{Component} from 'react';
import {ToastAndroid, View, Text, TouchableOpacity,ScrollView,TouchableWithoutFeedback} from 'react-native';
import {Icon,FormInput,FormLabel,FormValidationMessage} from 'react-native-elements';
import styles,{defaultColor} from '../leadDetail.style.js';


export default class ExperienceAndBankingInformationScreen extends Component {

    constructor(props){
      super(props)
      this.data = this.props.screenProps.data;

      this.screenState= this.props.screenProps.state;

      this.state = this.screenState.experience

      this._handleTextInputChange = (event, name) =>{
        this.props.screenProps.inputChangeHandler(event,name)
      }
    }

    render() {
        return (
            <ScrollView>
                <FormLabel>Nama Perusahaan Asuransi (Ex)</FormLabel>
                <FormInput value={this.state.exInsurance} onChange={(e) => this._handleTextInputChange(e,'exInsurance')}/>
                <FormLabel>Tgl. Mengundurkan Diri</FormLabel>
                <FormInput value={this.state.exExitDate} onChange={(e) => this._handleTextInputChange(e,'exExitDate')}/>
                <FormLabel>Expired Date</FormLabel>
                <FormInput value={this.state.exExpiredDate} onChange={(e) => this._handleTextInputChange(e,'exExpiredDate')}/>
                <FormLabel>No. Lisensi Agent</FormLabel>
                <FormInput value={this.state.licenseAgentNo} onChange={(e) => this._handleTextInputChange(e,'licenseAgentNo')}/>
                <FormLabel>Nama Bank</FormLabel>
                <FormInput value={this.state.bank} onChange={(e) => this._handleTextInputChange(e,'bank')}/>
                <FormLabel>No. Rekening</FormLabel>
                <FormInput value={this.state.bankAccountNo} onChange={(e) => this._handleTextInputChange(e,'bankAccountNo')}/>
                <FormLabel>Nama Rekening</FormLabel>
                <FormInput value={this.state.bankAccountName} onChange={(e) => this._handleTextInputChange(e,'bankAccountName')}/>
                <FormLabel>No. NPWP</FormLabel>
                <FormInput value={this.state.taxId} onChange={(e) => this._handleTextInputChange(e,'taxId')}/>
            </ScrollView>
        );
    }
  }