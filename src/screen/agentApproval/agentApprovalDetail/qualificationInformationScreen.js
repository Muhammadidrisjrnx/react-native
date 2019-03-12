import React,{Component} from 'react';
import {ToastAndroid,Image, View, Text, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator  } from 'react-navigation';
import Moment from 'moment';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

import ThumbImage from '../../../component/thumbImage/thumbimage.js'

import styles,{defaultColor} from './agentApprovalDetail.style.js';

export default class QualificationInformationScreen extends Component {
    render() {
        const data = this.props.screenProps.data;
        return (
            <View style={styles.tabContainer}>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Minimum Age</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>Qualified</Text>
                    <Icon iconStyle={[styles.itemDetail,styles.qualified]} type="font-awesome" name={'check-circle'}></Icon>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Education</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>Unqualified</Text>
                    <Icon iconStyle={[styles.itemDetail,styles.unqualified]} type="font-awesome" name={'times-circle'}></Icon>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Working Experience</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>Qualified</Text>
                    <Icon iconStyle={[styles.itemDetail,styles.qualified]} type="font-awesome" name={'check-circle'}></Icon>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Insurance Agent Experience</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>Unqualified</Text>
                    <Icon iconStyle={[styles.itemDetail,styles.unqualified]} type="font-awesome" name={'times-circle'}></Icon>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Lead Experience</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>Unqualified</Text>
                    <Icon iconStyle={[styles.itemDetail,styles.unqualified]} type="font-awesome" name={'times-circle'}></Icon>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Monthly Commission</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>Unqualified</Text>
                    <Icon iconStyle={[styles.itemDetail,styles.unqualified]} type="font-awesome" name={'times-circle'}></Icon>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Monthly Salary</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>Qualified</Text>
                    <Icon iconStyle={[styles.itemDetail,styles.qualified]} type="font-awesome" name={'check-circle'}></Icon>
                </View>
                
            </View>
        );
    }
  }