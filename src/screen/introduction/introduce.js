import MainBody from '../../component/mainBody/mainBody.js'
import Profile from '../../component/profile/profile.js';
import Expand from 'react-native-simple-expand';
import React, { Component } from 'react';
import {Animated,TouchableOpacity,Text,View,ScrollView,Alert} from 'react-native';
import styles from './introduce.style';
import { Icon } from 'native-base';
import Panel from './Panel';
import Seekbar from './Seekbar';
import { FormLabel,FormInput } from 'react-native-elements';

// declaration class Circle_icon
class Circle_icon extends Component{
  onPressButton(){
    Alert.alert('Click')
  }
    render(){
        return(
          <View>
          <View style={{flexDirection:'column',alignSelf:'center'}}>
          <View>
          <TouchableOpacity
          onPress={this.onPressButton}  
          style={{
                borderWidth:1,
                borderColor:'rgba(0,0,0,0.2)',
                alignItems:'center',
                justifyContent:'center',
                width:75,
                height:75,
                backgroundColor:'#fff',
                borderRadius:75,
              }}>
            <Icon name={"chevron-right"}  size={30} color="#01a699" />
          </TouchableOpacity>
          </View>
          <Text>New House</Text>
          </View>
          <View style={{position:'relative'}}>
          <View style={{position:'absolute',marginLeft:20}}>
          <View>
          <TouchableOpacity
          onPress={this.onPressButton}  
          style={{
                borderWidth:1,
                borderColor:'rgba(0,0,0,0.2)',
                alignItems:'center',
                justifyContent:'center',
                width:75,
                height:75,
                backgroundColor:'#fff',
                borderRadius:75,
              }}>
            <Icon name={"chevron-right"}  size={30} color="#01a699" />
          </TouchableOpacity>
          </View>
          <Text>New Car</Text>
          </View>
          <View style={{alignSelf:'flex-end',marginRight:20}}>
          <View>
          <TouchableOpacity
          onPress={this.onPressButton}  
          style={{
                borderWidth:1,
                borderColor:'rgba(0,0,0,0.2)',
                alignItems:'center',
                justifyContent:'center',
                width:75,
                height:75,
                backgroundColor:'#fff',
                borderRadius:75,
              }}>
            <Icon name={"chevron-right"}  size={30} color="#01a699" />
          </TouchableOpacity>
          </View>
          <View style={{marginLeft:10}}>
          <Text>Education</Text>
          </View>
          </View>
          </View>
          <View style={{position:'relative',marginTop:30}}>
          <View style={{position:'absolute',marginLeft:20}}>
          <View>
          <TouchableOpacity
          onPress={this.onPressButton}  
          style={{
                borderWidth:1,
                borderColor:'rgba(0,0,0,0.2)',
                alignItems:'center',
                justifyContent:'center',
                width:75,
                height:75,
                backgroundColor:'#fff',
                borderRadius:75,
              }}>
            <Icon name={"chevron-right"}  size={30} color="#01a699" />
          </TouchableOpacity>
          </View>
          <Text>Holiday</Text>
          </View>
          <View style={{alignSelf:'flex-end',marginRight:20}}>
          <View>
          <TouchableOpacity
          onPress={this.onPressButton}  
          style={{
                borderWidth:1,
                borderColor:'rgba(0,0,0,0.2)',
                alignItems:'center',
                justifyContent:'center',
                width:75,
                height:75,
                backgroundColor:'#fff',
                borderRadius:75,
              }}>
            <Icon name={"chevron-right"}  size={30} color="#01a699" />
          </TouchableOpacity>
          </View>
          <Text>Others</Text>
          </View>
          </View>
          <View style={{flexDirection:'column',alignSelf:'center',marginTop:25,marginBottom:10}}>
          <View>
          <TouchableOpacity
          onPress={this.onPressButton}  
          style={{
                borderWidth:1,
                borderColor:'rgba(0,0,0,0.2)',
                alignItems:'center',
                justifyContent:'center',
                width:75,
                height:75,
                backgroundColor:'#fff',
                borderRadius:75,
              }}>
            <Icon name={"chevron-right"}  size={30} color="#01a699" />
          </TouchableOpacity>
          </View>
          <Text>Get Marriage</Text>
          </View>
          </View>
        );
    }
}

export default class introduce_page extends Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <MainBody source={require('../../../resource/image/bg.jpg')}>
      <Profile imageOnly={true} source={require('../../../resource/image/profile.jpg')} name="Fandi Fadillah" group="Agency BEST"/>
      <View style={styles.introduce_titleContainer}>
          <Text style={styles.introduce_titleText}>Introduction</Text>
      </View>
      <ScrollView>
      <View style={styles.shape_square}>
      <Text style={{marginTop:10,flexDirection:'row',alignSelf:'center'}}>What are the Top Three dreams for your loved ones?</Text>
      <Text style={{marginTop:10,marginBottom:15,color:'#d3d3d3',flexDirection:'row',alignSelf:'center'}}>Drag Max 3 Goals</Text>
      // <View style={{flexDirection:'column',alignSelf:'center'}}>
      <Circle_icon/>
      // <Text>New House</Text>
      // </View>
      // <View style={{position:'relative'}}>
      // <View style={{position:'absolute',marginLeft:20}}>
      // <Circle_icon/>
      // <Text>New Car</Text>
      // </View>
      // <View style={{alignSelf:'flex-end',marginRight:20}}>
      // <Circle_icon/>
      // <View style={{marginLeft:10}}>
      // <Text>Education</Text>
      // </View>
      // </View>
      // </View>
      // <View style={{position:'relative',marginTop:30}}>
      // <View style={{position:'absolute',marginLeft:20}}>
      // <Circle_icon/>
      // <Text>Holiday</Text>
      // </View>
      // <View style={{alignSelf:'flex-end',marginRight:20}}>
      // <Circle_icon/>
      // <Text>Others</Text>
      // </View>
      // </View>
      // <View style={{flexDirection:'column',alignSelf:'center',marginTop:25,marginBottom:10}}>
      // <Circle_icon/>
      // <Text>Get Marriage</Text>
      // </View>
      <Panel title="Dream 1">
      <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'column',flex:1}}>
        <FormLabel>How much it will cost now ?</FormLabel>
        <FormInput></FormInput>
        <FormLabel>How much it the existing fund allocated for the dream ?</FormLabel>
        <FormInput></FormInput>
        <FormLabel>When do you want to realize Your dream ?</FormLabel>
        <Seekbar></Seekbar>
        <FormLabel>Assumption of Inflation rate per year ?</FormLabel>
        <View style={{marginTop:10}}>
        <Seekbar></Seekbar>
        </View>
        <FormLabel>Rate of Investment Return ?</FormLabel>
        <View style={{marginTop:10}}>
        <Seekbar></Seekbar>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonOpac}>
                <Text style={styles.buttonText}>
                    Calculate
                </Text>
            </TouchableOpacity>
        </View>
        <FormLabel>Future Need Gap</FormLabel>
        <FormInput></FormInput>
        <FormLabel>Monthly Savings Required</FormLabel>
        <FormInput></FormInput>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonOpac}>
                <Text style={styles.buttonText}>
                    Send this simulation
                </Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
      </Panel>
      </View>
      </ScrollView>
      </MainBody>
);
  }
}