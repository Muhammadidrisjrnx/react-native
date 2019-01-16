import React, {Component} from 'react';
import {View, Text,Image, ToastAndroid, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import { scale,verticalScale } from 'react-native-size-matters';

import {_getValueById} from '../../helper/helper.js';
import MainBody from '../../component/mainBody/mainBody.js';
import Profile from '../../component/profile/profile.js';
import {createMaterialTopTabNavigator  } from 'react-navigation';
import {Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import { PieChart } from 'react-native-svg-charts'
import { Circle, G, Line } from 'react-native-svg'

import {ds_LeadListData} from '../../helper/data.js'
import { Tab } from 'native-base';

import styles,{defaultColor} from './homeScreen.style.js'

class LeadDashboardScreen extends Component {
    handleViewRef = ref => this.view = ref;

    bounce = () => this.view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));

    render() {
        const data = [
            {
                key: 1,
                value: 50,
                svg: { fill: defaultColor.Red_Alt1 },
                arc: { outerRadius: '100%'  }
            },
            {
                key: 2,
                value: 50,
                svg: { fill: defaultColor.Red_Alt2 }
            },
            {
                key: 3,
                value: 40,
                svg: { fill: defaultColor.Red_Alt3 }
            },
            {
                key: 4,
                value: 95,
                svg: { fill: defaultColor.Red_Alt4 }
            },
        ]

        return (
            <View style={styles.tabMainContainer}>
                {/* <Text style={styles.itemDetail}>Lead</Text> */}
                <View style ={styles.tabSubContainer}>
                    <View style={styles.lead_headerContainer}>
                        <Text style={styles.lead_headerCaption}>Total Leads</Text>
                        {/* <ImageBackground style={{flex:1,width:scale(100),alignItems:'center',justifyContent:'center'}} source={require('../../../resource/image/badge_platinum.png')} resizeMode={'contain'}> */}
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../../../resource/image/grade_platinum.png')} style={{width:scale(60),height:scale(60),resizeMode:'contain'}}/>
                            <View style={{alignItems:'center'}}>
                                <Text style ={styles.lead_headerNumber}>50</Text>
                                <Text style={{fontSize:scale(15)}}>Leads</Text>
                            </View>
                        </View>
                        {/* </ImageBackground> */}
                    </View>
                    <View style={styles.lead_bodyContainer}>
                        <View style={styles.lead_bodyRowContainer}>
                            <Text style ={styles.lead_bodyNumber}>25</Text>
                            <Text style ={styles.lead_bodyCaption1}> Attend BOS</Text>
                        </View>
                        <View style={{alignItems:'center',flex:1}}>
                            <Text style ={styles.lead_bodyNumber}>10</Text>
                            <Text style ={styles.lead_bodyCaption2}> Submit</Text>
                            <Text style ={styles.lead_bodyCaption2}>Application</Text>
                        </View>
                    </View>
                    
                    {/* <View style={{width:'100%',flexDirection:'row', alignItems:'center'}}>
                        <View style={{alignItems:'flex-end',flex:1}}>
                            <Text style ={{fontSize:scale(20)}}>10</Text>
                            <Text style={{fontSize:scale(10)}}>Leads</Text>
                        </View>
                        <View style={{flex:2}}>
                            <Text style ={{fontSize:scale(20)}}> Submit Application</Text>
                        </View>
                    </View> */}
                   
                {/* <PieChart
                style={{ height: verticalScale(300) }}
                outerRadius={'80%'}
                innerRadius={'20%'}
                data={data}/> */}
                </View>
                <View style ={styles.tabSubContainer}>
                    <View style={styles.app_container}>
                        <Text style={styles.app_titleText}>Application Process</Text>
                        <View style={styles.app_rowContainer}>
                            <View style={styles.app_itemContainer}>
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../../../resource/image/grade_gold.png')} style={{width:scale(35),height:scale(35),resizeMode:'contain'}}/>
                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Text style ={styles.app_textNumber}>2</Text>
                                <Text style ={styles.app_textCaption}>On Process</Text>
                                </View>
                                </View>
                            </View>
                            <View style={styles.app_itemContainer}>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../../../resource/image/grade_silver.png')} style={{width:scale(35),height:scale(35),resizeMode:'contain'}}/>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Text style ={styles.app_textNumber}>1</Text>
                                <Text style ={styles.app_textCaption}>AAJI Pending</Text>
                            </View></View></View>
                        </View>
                        <View style={styles.app_rowContainer}>
                            <View style={styles.app_itemContainer}>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../../../resource/image/grade_gold.png')} style={{width:scale(35),height:scale(35),resizeMode:'contain'}}/>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Text style ={styles.app_textNumber}>2</Text>
                                <Text style ={styles.app_textCaption}>Code Active</Text>
                                </View></View></View>
                            <View style={styles.app_itemContainer}>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../../../resource/image/grade_silver.png')} style={{width:scale(35),height:scale(35),resizeMode:'contain'}}/>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Text style ={styles.app_textNumber}>2</Text>
                                <Text style ={styles.app_textCaption}>Closing Case</Text>
                                </View></View></View>
                        </View>
                        <View style={styles.app_rowContainer}>
                            <View style={styles.app_itemContainer}>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../../../resource/image/grade_silver.png')} style={{width:scale(35),height:scale(35),resizeMode:'contain'}}/>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Text style ={styles.app_textNumber}>2</Text>
                                <Text style ={styles.app_textCaption}>Non Productive</Text>
                                </View></View></View>
                            <View style={styles.app_itemContainer}>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../../../resource/image/grade_silver.png')} style={{width:scale(35),height:scale(35),resizeMode:'contain'}}/>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Text style ={styles.app_textNumber}>1</Text>
                                <Text style ={styles.app_textCaption}>Decline</Text>
                                </View></View></View>
                        </View>
                    </View>
                </View>
            </View>
          );
    }
}

class AgentDashboardScreen extends Component {
    render() {
        const data = [ 50, 10, 40, 95, -4, -24, 85, 91 ]

        const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: { 
                    fill: randomColor() ,
                    onPress: () => ToastAndroid.show(String(index),ToastAndroid.SHORT)
                },
                key: `pie-${index}`,
            }))

        const Labels = ({ slices }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <G key={ index }>
                        <Line
                            x1={ labelCentroid[ 0 ] }
                            y1={ labelCentroid[ 1 ] }
                            x2={ pieCentroid[ 0 ] }
                            y2={ pieCentroid[ 1 ] }
            
                            stroke={ data.svg.fill }
                        />
                        <Circle
                            cx={ labelCentroid[ 0 ] }
                            cy={ labelCentroid[ 1 ] }
                            r={ 15 }
                            fill={ data.svg.fill }
                            onPress={()=>ToastAndroid.show(String(index),ToastAndroid.SHORT)}
                        />
                    </G>
                )
            })
        }

        return (
            <View style={{ flex: 1 }}>
              <Text style={styles.itemDetail}>Agent</Text>
              <PieChart
                    style={ { height: scale(300) } }
                    data={ pieData }
                    innerRadius={ '20%' }
                    outerRadius={ '70%' }
                    labelRadius={ '90%' }
                    animate = {true}
                >
                    <Labels/>
                </PieChart>
            </View>
          );
    }
}

const TabNavigator = createMaterialTopTabNavigator(
    {
        Lead: {
            screen: LeadDashboardScreen,
            navigationOptions: ({ navigation }) => ({
                title: "Lead",
                tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'user'} iconStyle={styles.buttonIcon}/>
            })
        },
        Agent: {
            screen: AgentDashboardScreen,
            navigationOptions: ({ navigation }) => ({
                title: "Agent",
                tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'user'} iconStyle={styles.buttonIcon}/>
            })
        }
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
        },  
});

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
                

        return (
            <MainBody source={require('../../../resource/image/bg.jpg')}>
                <Profile imageOnly={false} source={require('../../../resource/image/profile.jpg')} name="Fandi Fadillah" group="Agency BEST"/>
                {/* <ThumbImage isImage={false} initialLetter={'W'} />
                <ThumbImage source={require('../../../resource/image/profile.jpg')} /> */}
                {/* <SwipeList source={this.state.data} onChangeText = {this._searchFilterFunction} onFilterChange={this._updateStatusFilter} filter={String(this.state.filter)}/> */}
                <View style={{flex:1,marginHorizontal:scale(15)}}>
                    <TabNavigator/>
                </View>
            </MainBody>
        );
    }
}