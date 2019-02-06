import React, { Component } from 'react';
import { StyleSheet,View, Text,Slider } from 'react-native';

export default class Seekbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider_value : 0   
    };
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Slider 
        step={1}
        minimumValue={0}
        maximumValue={10}
        minimumTrackTintColor="#C6281D"
        thumbTintColor="#C6281D"
        onValueChange={(change_value)=>this.setState({slider_value:change_value})}
        style={{width:'100%'}}/>
        <View style={{position:'relative',marginTop:10,marginBottom:10}}>
        <Text style={{position:'absolute',alignSelf:'flex-start'}}> 0 </Text>
        <Text style={{position:'absolute',alignSelf:'center'}}> {this.state.slider_value} </Text>
        <Text style={{alignSelf:'flex-end'}}> 10 </Text>
        </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer:{
    flex:1,
    marginTop: 10,
    marginBottom: 10,
  }
})