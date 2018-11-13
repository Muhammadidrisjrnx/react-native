import React, {Component} from 'react';
import {} from 'react-native';

import styles from './scheduleRegistration.style.js';

import MainBody from '../../../component/mainBody/mainBody.js';
import Profile from '../../../component/profile/profile.js';
import SchedulePicker from '../../../component/schedulePicker/schedulePicker.js';

import {ds_Schedule} from '../../../helper/data.js'


export default class ScheduleRegistration extends Component{
    constructor(props){
        super(props);

        this.state={
            data:ds_Schedule
        }
    }

    componentWillMount(){
        const newData = ds_Schedule.filter(item => {
            const { navigation } = this.props;
            const itemId = navigation.getParam('scheduleType', '1');        

            return item.scheduleType == itemId ;    
        });    

        this.setState({ data: newData });
    }

    render(){
        return(
                <SchedulePicker data={this.state.data}/>
        )
    }
}