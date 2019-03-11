import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Modal, TouchableHighlight} from 'react-native';
import {Icon} from 'react-native-elements';

import PropTypes from 'prop-types';

import styles from './schedulePicker.style.js';


export default class SchedulePickerDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalVisible:false
        }
    }

    _onPress = () => {
        this.props.navigation.goBack();
    }

    _onPressSend = () => {
        console.warn("Sent");
    }

    setModalVisible(bol){
        this.setState({modalVisible:bol})
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

                <TouchableOpacity style={styles.detail_button} onPress={()=>this.setModalVisible(true)}>
                    <Text style={styles.detail_buttonText}>SEND</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.modalBackdrop}>
                        <View style={styles.modalContainer}>
                            <Icon type={'font-awesome'} name={'paper-plane'} iconStyle={styles.modalIcon}/>
                            <Text style={styles.modalTitle}>Send this Schedule By Email?</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-evenly',margin:20}}>
                                <TouchableOpacity style={styles.modalButton}>
                                    <Text style={styles.modalButtonText}>Send</Text>
                                    <Icon type={'font-awesome'} name={'check'} iconStyle={styles.modalButtonText}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.modalButton} onPress={()=>{this.setModalVisible(false)}}>
                                    <Text style={styles.modalButtonText}>Cancel</Text>
                                    <Icon type={'font-awesome'} name={'close'} iconStyle={styles.modalButtonText}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}
