import React,{Component} from 'react';
import {View,Text,ScrollView,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown';
import {verticalScale,scale} from 'react-native-size-matters';
import {createStackNavigator} from 'react-navigation';
import PropTypes from 'prop-types';

import {Calendar} from 'react-native-calendars';
import styles,{defaultColor} from './scheduleTab.style.js';
import { Tab } from 'native-base';
import { getAgentDetailExam } from '../../../services/webservice/examService.js';

export default class ScheduleTab extends Component{
    constructor(props) {
        super(props);
        this.state = {
            typeSelected:0,
            branch:'1',
        };
        this.onDayPress = this.onDayPress.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this);
        this.onDropDownChangeText = this.onDropDownChangeText.bind(this);

        this.branchRef = this.updateRef.bind(this, 'branch');

        this.markedDates = {}
        this.markedDates.myAppointment = ['2019-03-03', '2019-03-24','2019-04-04']
        this.markedDates.bosSchedule = ['2019-03-01', '2019-03-20','2019-03-04']
        this.markedDates.aajiSchedule = ['2019-03-02', '2019-03-29','2019-03-14']

        this.createRenderMarkedDatesList()

        this.loadAajiSchedule()

      }

      loadAajiSchedule(){
        getAgentDetailExam(global.token).then((res)=>{
          console.warn(res)
          
        })
      }   

      processAajiSchedule(){

      }

    onDropDownChangeText = (text) => {
        ['level', 'branch', 'sample', 'typography']
          .map((name) => ({ name, ref: this[name] }))
          .filter(({ ref }) => ref && ref.isFocused())
          .forEach(({ name, ref }) => {
            this.setState({ [name]: text });
          });
      }

    updateRef = (name, ref) => {
        this[name] = ref;
      }

    createRenderMarkedDatesList(){
      this.currentMarkedDatesList = {}
      this.markedDatesList = [{},{},{}]

      for (var i = 0; i < this.markedDates.myAppointment.length; i++) {
        this.markedDatesList[0][this.markedDates.myAppointment[i]] = {selected:true,selectedColor:'red'}
      }

      for (var i = 0; i < this.markedDates.bosSchedule.length; i++) {
        this.markedDatesList[1][this.markedDates.bosSchedule[i]] = {selected:true,selectedColor:'blue'}
      }

      for (var i = 0; i < this.markedDates.aajiSchedule.length; i++) {
        this.markedDatesList[2][this.markedDates.aajiSchedule[i]] = {selected:true,selectedColor:'green'}
      }

      this.currentMarkedDatesList = this.markedDatesList[0]
    }
    
    render(){
        let {branch} = this.state;
        let selectedButton ={borderBottomWidth:verticalScale(2),borderBottomColor:'white'};
        
        return(
            <View>
                <View style={styles.schedule_buttonTypeContainer}>

                    <TouchableOpacity style={[styles.schedule_buttonType,this.state.typeSelected==0 && selectedButton]} onPress={() => this.onButtonPress(0)}>
                        <Icon type={'font-awesome'} name={'calendar'} iconStyle={styles.schedule_buttonTypeIcon}/>
                        <Text style={styles.schedule_buttonText}>My Appointment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.schedule_buttonType,this.state.typeSelected==1 && selectedButton]} onPress={() => this.onButtonPress(1)}>
                        <Icon type={'font-awesome'} name={'calendar'} iconStyle={styles.schedule_buttonTypeIcon}/>
                        <Text style={styles.schedule_buttonText}>BOS Schedule</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.schedule_buttonType,this.state.typeSelected==2 && selectedButton]} onPress={() => this.onButtonPress(2)}>
                        <Icon type={'font-awesome'} name={'calendar'} iconStyle={styles.schedule_buttonTypeIcon}/>
                        <Text style={styles.schedule_buttonText}>AAJI Schedule</Text>
                    </TouchableOpacity>
                </View>
                {
                  /*
                    (this.state.typeSelected == 1 || this.state.typeSelected == 2) &&
                    <Dropdown
                    ref={this.branchRef}
                    label='Cabang'
                    data={BRANCH}
                    value={branch}
                    onChangeText={this.onDropDownChangeText}
                    containerStyle={{marginHorizontal:scale(15)}}
                    textColor={'white'}
                    itemTextStyle={{color:defaultColor.Red}}
                    />
                    
                    */
                } 
                <ScrollView style={styles.schedule_body}>
                    <Calendar
                        onDayPress={this.onDayPress}
                        style={styles.calendar}
                        hideExtraDays
                        markedDates={this.currentMarkedDatesList}
                        />        
                </ScrollView>               
            </View>
        );
    }

    onButtonPress = (buttonIndex) => {
        this.setState({
          typeSelected: buttonIndex
        });
        this.currentMarkedDatesList = this.markedDatesList[buttonIndex]
      }

    onDayPress = (day) => {
        this.setState({
          daySelected: day.dateString
        });
        
        if(this.currentMarkedDatesList.hasOwnProperty(day.dateString)){
            this.props.navigation.navigate('ScheduleDetail')
        }
      }
}

const BRANCH = [
  {
    value:'1',
    label:'Jakarta',
    desc:''
  },
  {
    value:'2',
    label:'Medan',
    desc:''
  },
  {
    value:'3',
    label:'Balikpapan',
    desc:''
  },
  {
    value:'4',
    label:'Bandung',
    desc:''
  }
];