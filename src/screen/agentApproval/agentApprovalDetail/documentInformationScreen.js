import React,{Component} from 'react';
import {ToastAndroid,Image, View, Text, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator  } from 'react-navigation';
import Moment from 'moment';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

import ThumbImage from '../../../component/thumbImage/thumbimage.js'

import styles,{defaultColor} from './agentApprovalDetail.style.js';

export default class DocumentInformationScreen extends Component {
    render() {
      return (
        <View style={styles.tabContainer}>
            <View style={styles.itemTitleContainer}>
                <Text style={styles.itemTitle}>KTP</Text>
                <Image source={require('../../../../resource/image/profile.jpg')} />
            </View>
            <View style={styles.itemTitleContainer}>
                <Text style={styles.itemTitle}>Foto 3x4</Text>
                <Image source={require('../../../../resource/image/profile.jpg')} />
            </View>
        </View>
      );
    }
  }