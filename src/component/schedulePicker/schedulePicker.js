import React,{Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import PropTypes from 'prop-types';

import SchedulePickerList from './schedulePickerList.js';
import SchedulePickerDetail from './schedulePickerDetail.js';

const SchedulePickerRouter = createStackNavigator(
    {
      List:SchedulePickerList,
      Detail:SchedulePickerDetail,
    },
    {  
      headerMode:'none',
      cardStyle:{
          backgroundColor:'transparent'
      }
    }
  )

export default class SchedulePicker extends Component{
    addProps = {
        data: this.props.data,
        onPress: this.props.onPress,
        navigation:this.props.navigation, 
        }

    render(){
        return(
            <SchedulePickerRouter data={this.props.data} onPress={this.props.onPress} screenProps={this.addProps}/>
        )
    }
}

SchedulePicker.propTypes={
    data: PropTypes.array,
    onPress: PropTypes.func
}

SchedulePicker.defaultProps={
    data:[],
    onPress:_=>{}
}