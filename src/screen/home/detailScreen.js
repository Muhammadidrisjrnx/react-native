import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Picker,ScrollView} from 'react-native';
import { FormLabel,FormInput } from 'react-native-elements';
import styles from './homeScreen.style';
import {BarChart,Grid,XAxis,LineChart} from 'react-native-svg-charts';
import * as scale from 'd3-scale';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PickerSelected:''
    };
  }

  render() {
    // const data_target = [
    //   {value:5,label:'Jan'},
    //   {value:5,label:'Feb'},
    //   {value:5,label:'Mar'},
    //   {value:3,label:'Apr'},
      // {value:2,label:'May'},
      // {value:1,label:'Jun'},
      // {value:4,label:'Jul'},
      // {value:4,label:'Aug'},
      // {value:4,label:'Sep'},
      // {value:5,label:'Oct'},
      // {value:6,label:'Nov'},
      // {value:6,label:'Dec'},
    // ];
    const data_target = [5,5,5,3,2,1,4,4,4,5,6,6].map((value)=>({value}));
    const data_actual = [2,3,4,5,1,1,1,1,4,2,3,3].map((value)=>({value}));
    const data_case_close = [2,2,2,2,1,1,1,1,2,2,2,2].map((value)=>({value}));
    const bar_data = [
      {
        data:data_target,
        svg:{
          fill:'rgba(91,155,213,255)'
        },
      },
      {
        data:data_actual,
        svg:{
          fill:'rgba(237,125,49,255)'
        },
        label:{
          
        }
      },
      {
        data:data_case_close,
        svg:{
          fill:'rgba(128,128,128,255)'
        },
      },
    ];
    const month=[
      {label:'Jan'},
      {label:'Feb'},
      {label:'Mar'},
      {label:'Apr'},
      {label:'May'},
      {label:'Jun'},
      {label:'Jul'},
      {label:'Aug'},
      {label:'Sep'},
      {label:'Oct'},
      {label:'Nov'},
      {label:'Dec'},
    ];
    return (
        <View>
            <ScrollView>
              <FormLabel>Target</FormLabel>
              <FormInput></FormInput>
              <FormLabel>Bulan</FormLabel>
              <Picker
              selectedValue={this.state.PickerSelected}
              onValueChange={(itemValue,itemIndex)=>this.setState({PickerSelected:itemValue})}>
                <Picker.Item label="Januari" value="Januari"/>
                <Picker.Item label="Februari" value="Februari"/>
                <Picker.Item label="Maret" value="Maret"/>
                <Picker.Item label="April" value="April"/>
                <Picker.Item label="Mei" value="Mei"/>
                <Picker.Item label="Juni" value="Juni"/>
                <Picker.Item label="Juli" value="Juli"/>
                <Picker.Item label="Agustus" value="Agustus"/>
                <Picker.Item label="September" value="September"/>
                <Picker.Item label="Oktober" value="Oktober"/>
                <Picker.Item label="November" value="November"/>
                <Picker.Item label="Desember" value="Desember"/>
              </Picker>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonOpac}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
              <View style={{height:200,padding:10}}>
                <BarChart
                style={{flex:1}}
                data={bar_data}
                yAccessor={({item})=>item.value}
                svg={{fill:'rgba(91,155,213,255)'}}
                contentInset={{top:30,bottom:30}}>
                <Grid/>
                </BarChart>
                  <XAxis
                  data={month}
                  formatLabel={(_,index)=>month[index].label}
                  scale={scale.scaleBand}
                  contentInset={{top:10,bottom:10}}>
                  </XAxis>
              </View>
              </ScrollView>
        </View>
    );
  }
}
// <XAxis
// data={data_target}
// formatLabel={(_,index)=>data_target[index].label}
// xAccessor={({index})=>index}
// />


              // <View style={{marginLeft:10,marginRight:10,marginTop:10}}>
              //   <BarChart
              //   style={{height:200}}
              //   data={data_actual}
              //   svg={{fill:'rgba(237,125,49,255)'}}
              //   contentInset={{top:30,bottom:30}}>
              //     <Grid/>
              //   </BarChart>
              // </View>
              // <View style={{marginLeft:10,marginRight:10,marginTop:10,marginBottom:10}}>
              //   <BarChart
              //   style={{height:200}}
              //   data={data_case_close}
              //   svg={{fill:'rgba(128,128,128,255)'}}
              //   contentInset={{top:30,bottom:30}}>
              //     <Grid/>
              //   </BarChart>
              // </View>
