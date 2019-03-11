import React,{Component} from 'react';
import {ToastAndroid, View, Text, TouchableOpacity,ScrollView,TouchableWithoutFeedback} from 'react-native';
import {Icon,FormInput,FormLabel,FormValidationMessage} from 'react-native-elements';

import styles,{defaultColor} from '../leadDetail.style.js';

export default class RecruitInformationScreen extends Component {

    constructor(props){
      super(props)

      this.data = this.props.screenProps.data;

      this.screenState= this.props.screenProps.state;

      this.state = this.screenState.recruit

      this._handleTextInputChange = (event, name) =>{
        this.setState({[name]:event.nativeEvent.text})
      }
    }

    render() {
        const data = this.props.screenProps.data;
        return (
            <ScrollView>
                <FormLabel>Tipe Perekrut</FormLabel>
                <FormInput value={this.state.leaderType} onChange={(e) => this._handleTextInputChange(e,'leaderType')}/>
                <FormLabel>Nama Perekrut</FormLabel>
                <FormInput value={this.state.leaderName} onChange={(e) => this._handleTextInputChange(e,'leaderName')}/>
                <FormLabel>Hubungan dengan Perekrut</FormLabel>
                <FormInput value={this.state.leaderRelation} onChange={(e) => this._handleTextInputChange(e,'leaderRelation')}/>
                <FormLabel>Direct Leader Type</FormLabel>
                <FormInput value={this.state.leaderType} onChange={(e) => this._handleTextInputChange(e,'leaderType')}/>
                <FormLabel>Direct Leader Name</FormLabel>
                <FormInput value={this.state.leaderName} onChange={(e) => this._handleTextInputChange(e,'leaderName')}/>
            </ScrollView>
        );
    }
  }