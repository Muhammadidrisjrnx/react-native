import React,{Component} from 'react';
import {ToastAndroid, View, Text, TouchableOpacity,ScrollView,TouchableWithoutFeedback} from 'react-native';
import {Icon,FormInput,FormLabel,FormValidationMessage} from 'react-native-elements';
import styles,{defaultColor} from '../leadDetail.style.js';


export default class DocumentInformationScreen extends Component {

    constructor(props){
      super(props)
      this.data = this.props.screenProps.data;

      this.screenState= this.props.screenProps.state;

      this._handleTextInputChange = (event, name) =>{
        this.props.screenProps.inputChangeHandler(event,name)
      }
    }

    render() {
      return (
        <ScrollView>
          <FormLabel>KTP</FormLabel>
          <FormInput/>
          <FormLabel>Foto Berwarna 3x4</FormLabel>
          <FormInput/>
          <FormLabel>Form AAJI</FormLabel>
          <FormInput/>
          <FormLabel>Bukti Transfer</FormLabel>
          <FormInput/>
        </ScrollView>
      );
    }
  }