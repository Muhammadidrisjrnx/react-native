import React,{Component} from 'react';
import {ToastAndroid, View, Text, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator  } from 'react-navigation';
import Moment from 'moment';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

import ThumbImage from '../../../component/thumbImage/thumbimage.js'

import styles,{defaultColor} from './agentApprovalDetail.style.js';

class PersonalInformationScreen extends Component {
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
                {/* <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Nama Lengkap</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>: Jabatan</Text>
                </View> */}
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
            </View>
        );
    }
  }
  
  class AdditionalInformationScreen extends Component {
    render() {
        const data = this.props.screenProps.data;
        return (
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
        );
    }
  }

  class ExperienceAndBankingInformationScreen extends Component {
    render() {
        const data = this.props.screenProps.data;
        return (
            <View style={styles.tabContainer}>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Nama Perusahaan Asuransi (Ex)</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agt_ex_insurance_company}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Tgl. Mengundurkan Diri</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{Moment(data.agt_ex_insurance_exit_date).format('DD MMM YYYY')}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Expired Date</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{Moment(data.agt_ex_aaji_expired).format('DD MMM YYYY')}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>No. Lisensi Agent</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agt_aaji_no}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Nama Bank</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agt_bnk_id}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>No. Rekening</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agt_bnk_acc_no}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>Nama Rekening</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agt_bnk_acc_name}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemDetail}>No. NPWP</Text>
                    <Text style={[styles.itemDetail,{textAlign:'right'}]}>{data.agt_tax_id}</Text>
                </View>
            </View>
        );
    }
  }

  class RecruitInformationScreen extends Component {
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

  class DocumentInformationScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.itemDetail}>Settings!</Text>
        </View>
      );
    }
  }
  
  const TabNavigator = createMaterialTopTabNavigator({
    Personal: {
        screen: PersonalInformationScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Identitas Calon Agent",
            tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'user'} iconStyle={styles.buttonIcon}/>
        })
    },
    Additional: {
        screen: AdditionalInformationScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Informasi Tambahan",
            tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'address-card'} iconStyle={styles.buttonIcon}/>
        })
    },
    ExperienceAndBanking: {
        screen: ExperienceAndBankingInformationScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Pengalaman Terakhir & Informasi Bank",
            tabBarIcon:({tintColor}) => <Icon type={'octicon'} name={'clippy'} iconStyle={styles.buttonIcon}/>
        })
    },
    Recruit: {
        screen: RecruitInformationScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Perekrut & Leader",
            tabBarIcon:({tintColor}) => <Icon type={'octicon'} name={'organization'} iconStyle={styles.buttonIcon}/>
        })
    },
    Document: {
        screen: DocumentInformationScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Dokumen",
            tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'file'} iconStyle={styles.buttonIcon}/>
        })
    },
    
  },{
      lazy:true,
      swipeEnabled:true,
      animationEnabled:true,
      style:{backgroundColor:'white'},
      navigationOptions:{
        gesturesEnabled:true
      },
      tabBarOptions:{
          showIcon:true,
          showLabel:false,
          style:{
              backgroundColor:'white'
          },
          indicatorStyle:{
              backgroundColor:defaultColor.Red
          }
      }
  });

export default class AgentApprovalDetail extends Component{
    constructor(props){
        super(props);
    }

    onPressApprove = () =>{

    }

    onPressReject = () =>{

    }

    render(){
        const data = this.props.navigation.getParam('data',[]);
        //ToastAndroid.show(data.agt_name, ToastAndroid.SHORT);
        return(
            <View style={{flex:1}}>
                <TabNavigator screenProps={{data:data}}/>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonOpac}>
                        <Text style={styles.buttonText}>
                            Approve
                        </Text>
                        <Icon type={'font-awesome'} name={'angle-right'} iconStyle={styles.buttonIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOpac}>
                        <Text style={styles.buttonText}>
                            Reject
                        </Text>
                        <Icon type={'font-awesome'} name={'angle-right'} iconStyle={styles.buttonIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
