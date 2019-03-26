import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Modal, TouchableHighlight,ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';

import PropTypes from 'prop-types';

import styles from './schedulePicker.style.js';
import { convertDate } from '../../helper/date.js';
import { getAgent, updateAgent } from '../../services/webservice/agentService.js';
import { postExam, getExam } from '../../services/webservice/examService.js';
import { StatusDb } from '../../model/realm/statusDb.js';
import { getStatus } from '../../services/webservice/statusService.js';
import { LoadingDialog } from '../../component/popup/loading.js';
import { popUpError } from '../../component/popup/error.js';


export default class SchedulePickerDetail extends Component{
    constructor(props){
        super(props);
        this.data = this.props.navigation.getParam('data',[]);
        console.warn('data'+JSON.stringify(this.data))

        this.agentId = this.props.screenProps.data.agentId;
        console.warn('pickerlist props : '+JSON.stringify(this.props)+"\nagentId : "+this.agentId)

        getAgent(global.token,this.agentId).then((res) => {
            this.agent=res
        });

        getExam(global.token,this.data.id).then((res) => {
            this.exam=res
        });

        getStatus(global.token,9753).then((res) => {
            this.examConfirm=res
        });

        this.state = {
            modalVisible:false,
            isLoading:false
        }
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    _onPressSend = () => {
        console.warn("Sent");
    }
    
    changeState= (name,value)=>{
        this.setState({[name]:value},()=>{
        })
    }

    showLoadingDialog(show){
        this.changeState("isLoading",show)
    }

    setModalVisible(bol){
        this.setState({modalVisible:bol})
    }

    btnEmail = ()=>{
        this.btnSubmit()
    }

    btnSubmit = () => {
        this.setModalVisible(false)
        this.showLoadingDialog(true)
        console.warn("EXAM : "+this.exam)
        data = {
            egtexmConfirmationStatus:'0',
            agent:this.agent,
            exam:this.exam
        }
        postExam(global.token,data).then((res) => {
            console.warn('result : '+JSON.stringify(res))
            this.updateStatusAgent()
        });
    }

    updateStatusAgent(){
        data = this.agent
        data.status = {
            id: 5101,
            statVersion: 0,
        }

        updateAgent(global.token,data).then((res) => {
            console.warn('result : '+JSON.stringify(res))
            this.submitted()
        });
    }

    submitted(){
        this.showLoadingDialog(false)
        this.props.navigation.popToTop()
    }

    render(){
        return(
            <ScrollView style={styles.detail_mainContainer}>
                <View style={styles.detail_subContainer}>
                    <View style={styles.detail_textContainer}>
                        <Text style={styles.detail_leftText}>Tanggal</Text>
                        <Text style={styles.detail_rightText}>{convertDate(this.data.exmDate)}</Text>
                    </View>
                    <View style={styles.detail_separator}/>
        
                    <View style={styles.detail_textContainer}>
                        <Text style={styles.detail_leftText}>Lokasi</Text>
                    </View>
                    <View style={styles.detail_separator}/>
                    <View style={styles.detail_textContainer}>
                        <Text style={styles.detail_leftText}>{this.data.exmLocation}</Text>
                    </View>
                    <View style={styles.detail_separator}/>
                    <View style={styles.detail_textContainer}>
                        <Text style={styles.detail_leftText}>Kota</Text>
                        <Text style={styles.detail_rightText}>{this.data.exmCity}</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.detail_button} onPress={()=>this.setModalVisible(true)}>
                    <Text style={styles.detail_buttonText}>DAFTARKAN</Text>
                </TouchableOpacity>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.modalBackdrop}>
                        <View style={styles.modalContainer}>
                            <Icon type={'font-awesome'} name={'paper-plane'} iconStyle={styles.modalIcon}/>
                            <Text style={styles.modalTitle}>Kirim jadwal ke Email?</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-evenly',margin:20}}>
                                <TouchableOpacity style={styles.modalButton} onPress={()=>this.btnEmail()}>
                                    <Text style={styles.modalButtonText}>Daftar dan Kirim</Text>
                                    <Icon type={'font-awesome'} name={'check'} iconStyle={styles.modalButtonText}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.modalButton} onPress={()=>this.btnSubmit()}>
                                    <Text style={styles.modalButtonText}>Daftar</Text>
                                    <Icon type={'font-awesome'} name={'check'} iconStyle={styles.modalButtonText}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                { 
                    (this.state.isLoading) && <LoadingDialog/>
                }
            </ScrollView>
        )
    }
}
