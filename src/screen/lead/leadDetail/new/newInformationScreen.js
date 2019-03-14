import React,{Component} from 'react';
import {TextInput, View, Text, TouchableOpacity,ScrollView,TouchableWithoutFeedback} from 'react-native';
import {Icon,FormInput,FormLabel,FormValidationMessage} from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles,{defaultColor} from '../leadDetail.style.js';
import thumbimageStyle from '../../../../component/thumbImage/thumbimage.style.js';
import Moment from 'moment';
import { requiredValidator, lengthValidator, emailValidator, phoneValidator } from '../../../../class/validator.js';




export default class newInformationScreen extends Component {

    constructor(props){
        super(props);

        this.screenState= this.props.screenProps.state;

        this.state = {
          agtName:'nama tes'.toUpperCase(),
          agtMobileNumber: '0812345'.toUpperCase(),
          agtEmail: 'email@email.com'.toUpperCase(),
        }
  
        this._handleTextInputChange = (event, name) =>{
          this.changeState(name,event.nativeEvent.text)
        }

        this.changeState= (name,value)=>{
          this.setState({[name]:value})
          this.props.screenProps.textInputHandler('new',this.state)
        }
    }

    render() {
        return (
            <ScrollView >
              <FormLabel>Nama Lengkap Agent {'('}Sesuai Dengan KTP{')'}</FormLabel>
              <FormInput autoCapitalize="characters" ref='name' value={this.state.agtName} onChangeText={(text) => this.changeState('agtName',text)}/>
              <FormValidationMessage>{requiredValidator(this.state.agtName)?'':'Wajib diisi'}</FormValidationMessage>
              <FormLabel>No. HP</FormLabel>
              <FormInput keyboardType="phone-pad" autoCapitalize="characters" value={this.state.agtMobileNumber} onChange={(e) => this._handleTextInputChange(e,'agtMobileNumber')}/>
              <FormValidationMessage>{phoneValidator(this.state.agtMobileNumber)?'':'Harus 8-15 Karakter'}</FormValidationMessage>
              <FormLabel>Email</FormLabel>
              <FormInput autoCapitalize="characters" value={this.state.agtEmail} onChange={(e) => this._handleTextInputChange(e,'agtEmail')}/>
              <FormValidationMessage>{emailValidator(this.state.agtEmail)? '':'Alamat email tidak valid'}</FormValidationMessage>
              <FormLabel>Agent Status</FormLabel>
              <FormInput autoCapitalize="characters" value={"NEW"} editable={false} selectTextOnFocus={false}/>
            </ScrollView>
        );
    }
  }