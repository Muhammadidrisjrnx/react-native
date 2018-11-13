import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import PropTypes from 'prop-types';

import styles from './schedulePicker.style.js';


export default class SchedulePickerDetail extends Component{
    constructor(props){
        super(props);
    }

    _onPress = () => {
        this.props.navigation.goBack();
    }

    render(){
        return(
            <View style={styles.detail_mainContainer}>
                <TouchableOpacity style={styles.detail_headerBackButton} onPress={this._onPress}>
                    <Icon type={'font-awesome'} name={'angle-left'} iconStyle={styles.detail_headerIcon}/>
                    <Text style={styles.detail_headerText}>Back</Text>
                </TouchableOpacity>


                <View style={styles.detail_subContainer}>
                    <View style={styles.detail_textContainer}>
                        <Text style={styles.detail_leftText}>Date</Text>
                        <Text style={styles.detail_rightText}>asdfasdf</Text>
                    </View>
                    <View style={styles.detail_separator}/>
                    <View style={styles.detail_textContainer}>
                        <Text style={styles.detail_leftText}>Time</Text>
                        <Text style={styles.detail_rightText}>asdfasdf</Text>
                    </View>
                    <View style={styles.detail_separator}/>
                    <View style={styles.detail_textContainer}>
                        <Text style={styles.detail_leftText}>Location</Text>
                        <Text style={styles.detail_rightText}>asdfasdf</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.detail_button}>
                    <Text style={styles.detail_buttonText}>SEND</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
