import React,{Component} from 'react';
import {ToastAndroid,Image, View, Text, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator  } from 'react-navigation';
import Moment from 'moment';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

import ThumbImage from '../../../component/thumbImage/thumbimage.js'

import styles,{defaultColor} from './agentApprovalDetail.style.js';

export default class PersonalInformationScreen extends Component {
    render() {
        const data = this.props.screenProps.data;
        
        return (
            <View style={styles.tabContainer}>
                <View style={styles.itemTitleContainer}>
                    <ThumbImage source={require('../../../../resource/image/profile.jpg')} />
                    <Text style={styles.itemTitle}>{data.agtName}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Jabatan</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.level.lvlName}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Cabang</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.branch?data.branch.brcName:''}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Kode</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agtCode}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Join Date</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agtJoinDate}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Agent Status</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.status.statName}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Tempat Lahir</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agtPob}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Tanggal Lahir</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agtDob}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Jenis Kelamin</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agtSex=='F'?'Perempuan':'Pria'}</Text>
                </View>
                <View style={styles.tabContainer}>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Status Perkawinan</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agtMaritalStatus}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Pekerjaan</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.occupation?data.occupation.ocuName:''}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Jumlah Tanggungan</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agtDependentTotal}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>No. HP</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agtMobileNumber}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Email</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agtEmail}</Text>
                </View>
            </View>
            </View>
        );
    }
  }