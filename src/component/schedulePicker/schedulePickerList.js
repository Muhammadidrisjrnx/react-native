import React, {Component} from 'react';
import {FlatList,View, Text, TouchableOpacity,ScrollView} from 'react-native';
import {Icon,FormInput,FormLabel,FormValidationMessage} from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown';
import {getAllService} from '../../services/webservice/getService';

import PropTypes from 'prop-types';
import {verticalScale,scale} from 'react-native-size-matters';
import styles,{defaultColor} from './schedulePicker.style.js';
import DateTimePicker from 'react-native-modal-datetime-picker';


export default class SchedulePickerList extends Component{
    constructor(props){
        super(props);
        this.state = {
            typeSelected:0,
            branch:'1',
        };
        this.onButtonPress = this.onButtonPress.bind(this);

        this.state = {
            agtName:'',
            agtMobileNumber:'',
            agtEmail:'',
            appointmentDate:'',
            appointmentTime:''
        }

        getAllService(global.token,'exams').then((res) => {
            this.setState({data:res})
            console.warn(this.state)
        });

    }
    _onPress = () =>{
        this.props.navigation.navigate('Detail');
    }

    onButtonPress = (buttonIndex) => {
        this.setState({
          typeSelected: buttonIndex
        });
      }

    _showJoinDatePicker=()=>{
        
    }

    _handleTextInputChange = (event, name) =>{
        
    }

    SchedulePicker_RenderListItem = ({item}) => {
        return(
            <TouchableOpacity key={item.id} style={styles.listItem_TouchableOpac} onPress={this._onPress}>
                <Icon type={'font-awesome'} name={'calendar'} iconStyle={styles.listItem_leftIcon} />
                <View style={styles.listItem_textContainer}>
                    <Text style={styles.listItem_textTitle}>{String(item.exmDate)}</Text>
                    <Text style={styles.listItem_textSubTitle}>{item.exmCity}</Text>
                </View>
                <Icon type={'font-awesome'} name={'angle-right'} iconStyle={styles.listItem_rightIcon}/>
            </TouchableOpacity>
        )
    }

    SchedulePicker_RenderHeader = () => {

    }

    SchedulePicker_keyExtractor = (item, index) => {
        return String(item.scheduleId);
    };

    SchedulePicker_renderSeparator = () => {
        return (
          <View
            style={{
              height: 2,
              width:'100%',
              backgroundColor: "#CED0CE",
            }}
          />
        );
      };
 
    SchedulePicker_renderMyAppointment(){
        return (
            <ScrollView style={styles.flatlist}>
                <View style={{flex:1}}>
                  <FormLabel>Nama</FormLabel>
                  <FormInput value={this.state.agtName}editable={false} selectTextOnFocus={false}/>
                </View>
                <View style={{flex:1}}>
                  <FormLabel>No. Hp</FormLabel>
                  <FormInput value={this.state.agtMobileNumber} editable={false} selectTextOnFocus={false}/>
                </View>
                <View style={{flex:1}}>
                    <FormLabel>Email</FormLabel>
                    <FormInput value={this.state.agtEmail} editable={false} selectTextOnFocus={false}/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:2}}>
                    <FormLabel>Tanggal</FormLabel>
                    <FormInput value={this.state.appointmentDate} onChange={(e) => this._handleTextInputChange(e,'agtCode')}/>
                    </View>
                    <View style={{flex:1}}>
                    <FormLabel>Jam</FormLabel>
                    <TouchableOpacity onPress={()=>this._showJoinDatePicker()}>
                        <View pointerEvents="none">
                        <FormInput value={this.state.agtJoinDate}/>
                        </View>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={this.state.isJoinDatePickerVisible}
                        onConfirm={this._handleJoinDatePicked}
                        onCancel={this._hideJoinDatePicker}/>
                    </View>
                </View>
            </ScrollView>
        )
    }

    SchedulePicker_renderCalendar(){
        return(
            <View>
                <Dropdown
                    ref={this.branchRef}
                    label='Lokasi'
                    data={BRANCH}
                    value={this.state.branch}
                    onChangeText={this.onDropDownChangeText}
                    containerStyle={{marginHorizontal:scale(15)}}
                    textColor={'white'}
                    itemTextStyle={{color:defaultColor.Red}}
                    />
                <FlatList
                    data={this.state.data}
                    renderItem = {this.SchedulePicker_RenderListItem}
                    //ListHeaderComponent = {this.SchedulePicker_RenderHeader}
                    extraData={this.state}
                    ItemSeparatorComponent={this.SchedulePicker_renderSeparator}
                    style={styles.flatlist}
                />
            </View>
        )
    }

    render(){

        let selectedButton ={borderBottomWidth:verticalScale(2),borderBottomColor:'white'};


        return(
            <View>
                <View style={styles.schedule_buttonTypeContainer}>
                    <TouchableOpacity style={[styles.schedule_buttonType,this.state.typeSelected==0 && selectedButton]} onPress={() => this.onButtonPress(0)}>
                        <Icon type={'font-awesome'} name={'calendar'} iconStyle={styles.schedule_buttonTypeIcon}/>
                        <Text style={styles.schedule_buttonText}>MyAppointment</Text>
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
                    (this.state.typeSelected == 0) && this.SchedulePicker_renderMyAppointment()
                }
                { 
                    (this.state.typeSelected == 1 || this.state.typeSelected == 2) && this.SchedulePicker_renderCalendar()
                }
            </View>
        )
    }
}

SchedulePickerList.propTypes={
    data: PropTypes.array,
    onPress: PropTypes.func
}

SchedulePickerList.defaultProps={
    data:[],
    onPress:_=>{}
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
