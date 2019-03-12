import React,{Component} from 'react';
import {ToastAndroid,Image, View, Text, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator  } from 'react-navigation';
import Moment from 'moment';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

import ThumbImage from '../../../component/thumbImage/thumbimage.js'

import styles,{defaultColor} from './agentApprovalDetail.style.js';

export default class SelectionInformationScreen extends Component {
    render() {
        const data = this.props.screenProps.data;
        return (
            <View style={styles.tabContainer}>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Achievement Drive</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>5</Text>
                    <Icon iconStyle={[styles.itemDetail,styles.star]} type="font-awesome" name={'star'}></Icon>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Thread of Discontent</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>3</Text>
                    <Icon iconStyle={[styles.itemDetail,styles.star]} type="font-awesome" name={'star'}></Icon>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Money Motivated</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>3</Text>
                    <Icon iconStyle={[styles.itemDetail,styles.star]} type="font-awesome" name={'star'}></Icon>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Integrity</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>4</Text>
                    <Icon iconStyle={[styles.itemDetail,styles.star]} type="font-awesome" name={'star'}></Icon>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Energy Level</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>5</Text>
                    <Icon iconStyle={[styles.itemDetail,styles.star]} type="font-awesome" name={'star'}></Icon>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Learning Ability</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>5</Text>
                    <Icon iconStyle={[styles.itemDetail,styles.star]} type="font-awesome" name={'star'}></Icon>
                </View>
            </View>
        );
    }
  }