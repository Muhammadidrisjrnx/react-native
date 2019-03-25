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

      this.isSubmittable = this.props.screenProps.isSubmittable;


      console.warn(this.state)

      this._handleTextInputChange = (event, name) =>{
        this.changeState(name,event.nativeEvent.text)
      }

      this.changeState= (name,value)=>{
        this.setState({[name]:value},() => {

          data = this.state
        
          this.props.screenProps.textInputHandler('recruit',data)
        })
      }

    }

    /*
    "agtRecruitType": "FC",
    "agtRecruitId": "FC0001",
    "agtRecruitRelation": null,
    "agtLeaderType": "BM",
    "agtLeaderId": "BM0003",
    */

    render() {
        const data = this.props.screenProps.data;
        return (
            <ScrollView>
                <FormLabel>Tipe Perekrut</FormLabel>
                <FormInput value={this.state.agtRecruitType+""} editable={false} selectTextOnFocus={false}/>
                <FormLabel>Nama Perekrut</FormLabel>
                <FormInput value={this.state.agtRecruitId+""} editable={false} selectTextOnFocus={false}/>
                <FormLabel>Hubungan dengan Perekrut</FormLabel>
                <FormInput
                  autoCapitalize="characters"
                  value={this.state.agtRecruitRelation}
                  onChange={(e) => this._handleTextInputChange(e,'agtRecruitRelation')}
                  editable={this.isSubmittable} selectTextOnFocus={this.isSubmittable}/> 
                <FormLabel>Direct Leader Type</FormLabel>
                <FormInput value={this.state.agtLeaderType+""} editable={false} selectTextOnFocus={false}/>
                <FormLabel>Direct Leader Name</FormLabel>
                <FormInput value={this.state.agtLeaderId+""} editable={false} selectTextOnFocus={false}/>
            </ScrollView>
        );
    }
  }