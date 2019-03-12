import React,{Component} from 'react';
import {ToastAndroid,Image, View, Text, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator  } from 'react-navigation';
import Moment from 'moment';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

import ThumbImage from '../../../component/thumbImage/thumbimage.js'

import styles,{defaultColor} from './agentApprovalDetail.style.js';

export default class RecruitInformationScreen extends Component {
    render() {
        const data = this.props.screenProps.data;
        return (
            <View style={styles.tabContainer}>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Tipe Perekrut</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>TipePerekrut</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Nama Perekrut</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>NamaPerekrut</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Hubungan dengan Perekrut</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>HubunganDenganPerekrut</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Direct Leader Type</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>DirectLeaderType</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Direct Leader Name</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>DirectLeaderName</Text>
                </View>
            </View>
        );
    }
  }