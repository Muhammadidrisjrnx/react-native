import React,{Component} from 'react';
import {ToastAndroid,Image, View, Text, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator  } from 'react-navigation';
import Moment from 'moment';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

import ThumbImage from '../../../component/thumbImage/thumbimage.js'

import styles,{defaultColor} from './agentApprovalDetail.style.js';

export default class ExperienceAndBankingInformationScreen extends Component {
    render() {
        const data = this.props.screenProps.data;
        return (
            <View style={styles.tabContainer}>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Nama Perusahaan Asuransi (Ex)</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agtExInsuranceCompany}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Tgl. Mengundurkan Diri</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agtExInsuranceResignDate}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Expired Date</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agtExAajiExpired}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>No. Lisensi Agent</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agtAajiNo}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Nama Bank</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.bank?data.bank.bnkName:''}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>No. Rekening</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agtBankAccountNo}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Nama Rekening</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agtBankAccountName}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>No. NPWP</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agtTaxId}</Text>
                </View>
            </View>
        );
    }
  }