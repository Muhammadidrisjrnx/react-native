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
                    <Text style={styles.itemTitle}>{data.agt_name}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Jabatan</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agt_lvl_id}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Cabang</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agt_brc_id}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Kode</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agt_code}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Join Date</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{Moment(data.agt_join_date).format('DD MMM YYYY')}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Agent Status</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agt_stat_id}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Tempat Lahir</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>asd</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Tanggal Lahir</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{Moment(data.agt_dob).format('DD MMM YYYY')}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Jenis Kelamin</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agt_sex=='F'?'Perempuan':'Pria'}</Text>
                </View>
                <View style={styles.tabContainer}>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Status Perkawinan</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agt_marital_status}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Pekerjaan</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agt_ocu_id}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Jumlah Tanggungan</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agt_dependent_total}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>No. HP</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agt_mobile_number}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Email</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agt_email}</Text>
                </View>
            </View>
            </View>
        );
    }
  }