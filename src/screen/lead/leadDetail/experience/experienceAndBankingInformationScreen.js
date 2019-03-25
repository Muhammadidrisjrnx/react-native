import React,{Component} from 'react';
import {ToastAndroid, View, Text, TouchableOpacity,ScrollView,TouchableWithoutFeedback} from 'react-native';
import {Icon,FormInput,FormLabel,FormValidationMessage} from 'react-native-elements';
import styles,{defaultColor} from '../leadDetail.style.js';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Dropdown} from 'react-native-material-dropdown';

import Moment from 'moment';

import { requiredValidator, lengthValidator, emailValidator, phoneValidator, npwpValidator, rekeningValidator } from '../../../../helper/validator.js';


export default class ExperienceAndBankingInformationScreen extends Component {

    constructor(props){
      super(props)
      this.data = this.props.screenProps.data;

      this.screenState= this.props.screenProps.state;

      this.state = this.screenState.experience

      this.isSubmittable = this.props.screenProps.isSubmittable;

      this._showExpiredDatePicker = () => this.setState({ isExpiredDatePickerVisible: true });
    
      this._hideExpiredDatePicker = () => this.setState({ isExpiredDatePickerVisible: false });

      this._handleExpiredDatePicked = (date) => {
        this._hideExpiredDatePicker();       
        strDate = Moment(date).format('YYYY-MM-DD')
        this.changeState('agtExAajiExpired',strDate)          
      }

      this._showResignDatePicker = () => this.setState({ isResignDatePickerVisible: true });
    
      this._hideResignDatePicker = () => this.setState({ isResignDatePickerVisible: false });

      this._handleResignDatePicked = (date) => {
        this._hideResignDatePicker();       
        strDate = Moment(date).format('YYYY-MM-DD')
        this.changeState('agtExInsuranceResignDate',strDate)          
      }

      this.onDropDownChangeText = (type,text) => {
        obj = {}
        switch(type){
          case 'bank':
            obj = global.banks.find(x => x.id === text)
          break;
        }

        this.changeState(type,obj)

        console.warn(this.state[type]);
      }

      this._handleTextInputChange = (event, name) =>{
        this.changeState(name,event.nativeEvent.text)
      }

      this.changeState= (name,value)=>{
        this.setState({[name]:value},() => {

          data = this.state
          delete data.isResignDatePickerVisible
          delete data.isExpiredDatePickerVisible
          delete data.drop_bank
          this.props.screenProps.textInputHandler('experience',data)
        })
      }
  
      this.bankOptions = [];
      this.generateDropdown();
    }

    generateDropdown(){
      this.state.drop_bank = this.state.bank ? this.state.bank.id:'';

      for(i = 0; i<global.banks.length;i++){
        this.bankOptions [i] = {
          'value': global.banks[i].id,
          'label': global.banks[i].bnkName.toUpperCase()
        }
      }
    }

    render() {
        return (
            <ScrollView>
                <FormLabel>Nama Perusahaan Asuransi (Ex)</FormLabel>
                <FormInput 
                  autoCapitalize="characters" 
                  value={this.state.agtExInsuranceCompany} 
                  onChange={(e) => this._handleTextInputChange(e,'agtExInsuranceCompany')}
                  editable={this.isSubmittable} selectTextOnFocus={this.isSubmittable}/> 

                <FormLabel>Resign Date</FormLabel>
                <TouchableOpacity disabled={!this.isSubmittable} onPress={()=>this._showResignDatePicker()}>
                  <View pointerEvents="none">
                    <FormInput autoCapitalize="characters" value={this.state.agtExInsuranceResignDate}/>
                  </View>
                </TouchableOpacity>
                <DateTimePicker
                  isVisible={this.state.isResignDatePickerVisible}
                  onConfirm={this._handleResignDatePicked}
                  onCancel={this._hideResignDatePicker}
                />     

                <FormLabel>Expired Date</FormLabel>
                <TouchableOpacity disabled={!this.isSubmittable} onPress={()=>this._showExpiredDatePicker()}>
                  <View pointerEvents="none">
                    <FormInput autoCapitalize="characters" value={this.state.agtExAajiExpired}/>
                  </View>
                </TouchableOpacity>
                <DateTimePicker
                  isVisible={this.state.isExpiredDatePickerVisible}
                  onConfirm={this._handleExpiredDatePicked}
                  onCancel={this._hideExpiredDatePicker}
                />

                <FormLabel>No. Lisensi Agent</FormLabel>
                <FormInput 
                  autoCapitalize="characters" 
                  value={this.state.agtAajiNo} 
                  onChange={(e) => this._handleTextInputChange(e,'agtAajiNo')}
                  editable={this.isSubmittable} selectTextOnFocus={this.isSubmittable}/> 
                
                <FormLabel>Nama Bank</FormLabel>
                <Dropdown
                  label='Bank'
                  data={this.bankOptions}
                  value={this.state.drop_bank}
                  onChangeText={(text) => {this.onDropDownChangeText('bank',text)}}
                  containerStyle={{marginHorizontal:17}}
                  baseColor={defaultColor.Black}
                  disabled={!this.isSubmittable}/>
                <FormValidationMessage>{requiredValidator(this.state.bank)?'':'Wajib diisi'}</FormValidationMessage>


                <FormLabel>No. Rekening</FormLabel>
                <FormInput 
                  autoCapitalize="characters"
                  value={this.state.agtBankAccountNo}
                  onChange={(e) => this._handleTextInputChange(e,'agtBankAccountNo')}
                  editable={this.isSubmittable} selectTextOnFocus={this.isSubmittable}/> 
                <FormValidationMessage>{rekeningValidator(this.state.agtBankAccountNo)?'':'Wajib diisi angka, maks 20 karakter'}</FormValidationMessage>

                <FormLabel>Nama Rekening</FormLabel>
                <FormInput 
                  autoCapitalize="characters" 
                  value={this.state.agtBankAccountName}
                  onChange={(e) => this._handleTextInputChange(e,'agtBankAccountName')}
                  editable={this.isSubmittable} selectTextOnFocus={this.isSubmittable}/> 
                <FormValidationMessage>{requiredValidator(this.state.agtBankAccountName)?'':'Wajib diisi'}</FormValidationMessage>

                <FormLabel>No. NPWP</FormLabel>
                <FormInput
                  autoCapitalize="characters" 
                  value={this.state.agtTaxId}
                  onChange={(e) => this._handleTextInputChange(e,'agtTaxId')}
                  editable={this.isSubmittable} selectTextOnFocus={this.isSubmittable}/> 
                <FormValidationMessage>{npwpValidator(this.state.agtTaxId)?'':'Wajib diisi angka, maks 20 karakter'}</FormValidationMessage>

            </ScrollView>
        );
    }
  }