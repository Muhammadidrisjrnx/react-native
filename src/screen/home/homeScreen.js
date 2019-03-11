import React, {Component} from 'react';
import {View, Text,Image, ToastAndroid, TouchableWithoutFeedback, ImageBackground, ScrollView} from 'react-native';
import { scale,verticalScale } from 'react-native-size-matters';

import {_getValueById} from '../../helper/helper.js';
import MainBody from '../../component/mainBody/mainBody.js';
import Profile from '../../component/profile/profile.js';
import {createMaterialTopTabNavigator  } from 'react-navigation';
import {Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import firebase from 'react-native-firebase';

import { PieChart } from 'react-native-svg-charts'
import { Circle, G, Line } from 'react-native-svg'

import {ds_LeadListData} from '../../helper/data.js'
import { Tab } from 'native-base';

import styles,{defaultColor} from './homeScreen.style.js'

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: ds_LeadListData,
            filter: '1',
            search: '',
          };

        this.arrayholder = ds_LeadListData;

        this._searchFilterFunction = this._searchFilterFunction.bind(this);
    }

    _searchFilterFunction = text => {
        this.setState({search:text });
        this._refreshList(text,this.props.filter);
      };
    
    _updateStatusFilter = text =>{
        this.setState({filter:text });
        this._refreshList(this.props.search,text);
    }

    _refreshList = (name,status) =>{
        const newData = this.arrayholder.filter(item => {
            var nameFilter =true;
            var statusFilter =true;

            if(name==''){
                nameFilter= true;
            }else
            {
                nameFilter = `${item.LeadName.toUpperCase()}` == name.toUpperCase();
            }

            if(status==''){
                statusFilter = true;
            }else
            {
                statusFilter = item.LeadStatusId == status;
            }
            

            return nameFilter && statusFilter ;    
        });    

        this.setState({ data: newData });
    }

    render(){ 
        // alert(_getValueById("asd"));
        //ToastAndroid.show(this.state.filter,ToastAndroid.SHORT);
                
        const data = [
            {
                key: 1,
                value: 100,
                svg: { fill: defaultColor.Red_Alt2 },
            },
            {
                key: 2,
                value: 50,
                svg: { fill: defaultColor.Red_Alt4 }
            },
        ]


        return (
            <MainBody source={require('../../../resource/image/bg.jpg')}>
                <Profile imageOnly={false} source={require('../../../resource/image/profile.jpg')} name="Fandi Fadillah" group="Agency BEST"/>

                <ScrollView>
                    <View style={styles.mainContainer}>
                        <View style={styles.card}>
                            
                            <View style={styles.chartContainer}>
                                <View style={styles.pieChartContainer}>
                                    <PieChart style={styles.pieChart}
                                        outerRadius={'60%'}
                                        innerRadius={'30%'}
                                        data={data}/>
                                    <View style={styles.iconChartContainer}>
                                        <Icon type={'font-awesome'} name={'user-o'} size={40} iconStyle={styles.icon}/>
                                    </View>
                                </View>
                                <View style={styles.chartInfo}>
                                    <Text style={styles.textBold}>150</Text>
                                    <Text style={styles.text}>Total Leads</Text>
                                </View>
                            </View>

                            <View style={styles.listInfoItem}>
                                <Icon type={'font-awesome'} name={'calendar-o'} size={40} iconStyle={styles.icon}/>
                                <View style={styles.listInfoItemContent}>
                                    <Text style={styles.textBold}>100</Text>
                                    <Text style={styles.text}>Attend BOS</Text>
                                </View>
                            </View>

                            <View style={styles.listInfoItem}>
                                <Icon type={'font-awesome'} name={'check-circle-o'} size={40} iconStyle={styles.icon}/>
                                <View style={styles.listInfoItemContent}>
                                    <Text style={styles.textBold}>50</Text>
                                    <Text style={styles.text}>Submitted Applications</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <View style={styles.infoHorizontalTop}>
                                <View style={styles.infoItem}>
                                    <Text style={styles.infoText}>On Process</Text>
                                    <Text style={styles.infoTextBold}>2 Leads</Text>
                                </View>
                                <View style={styles.verticalDivider}></View>
                                <View style={styles.infoItem}>
                                    <Text style={styles.infoText}>AAJI Pending</Text>
                                    <Text style={styles.infoTextBold}>2 Leads</Text>
                                </View>
                                <View style={styles.verticalDivider}></View>
                                <View style={styles.infoItem}>
                                    <Text style={styles.infoText}>Code Active</Text>
                                    <Text style={styles.infoTextBold}>2 Leads</Text>
                                </View>
                            </View>
                            <View style={styles.infoHorizontalBottom}>
                                <View style={styles.infoItem}>
                                    <Text style={styles.infoText}>Closing Case</Text>
                                    <Text style={styles.infoTextBold}>2 Leads</Text>
                                </View>
                                <View style={styles.verticalDivider}></View>
                                <View style={styles.infoItem}>
                                    <Text style={styles.infoText}>Non-Productive</Text>
                                    <Text style={styles.infoTextBold}>2 Leads</Text>
                                </View>
                                <View style={styles.verticalDivider}></View>
                                <View style={styles.infoItem}>
                                    <Text style={styles.infoText}>Decline</Text>
                                    <Text style={styles.infoTextBold}>2 Leads</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </MainBody>
        );
    }
}