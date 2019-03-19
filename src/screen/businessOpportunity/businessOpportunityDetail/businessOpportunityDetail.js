import React, {Component} from 'react';
import {FlatList,View, Text, Image, ScrollView,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';
import {createMaterialTopTabNavigator  } from 'react-navigation';
import Tab1 from './tab1.js'


import styles,{defaultColor} from './businessOpportunityDetail.style.js';
import {ds_BusinessOpportunity} from '../../../helper/data.js'

export default class BusinessOpportunityDetail extends Component{
    constructor(props){
        super(props);
    }

    _onPress = () => {
        this.props.navigation.goBack();
    }

    render(){
        const { navigation } = this.props;
        //const itemId = navigation.getParam('selectedId', '1');

        return(
            <View style={styles.detail_mainContainer}>
                
                <TouchableOpacity style={styles.detail_headerBackButton} onPress={this._onPress}>
                    <Icon type={'font-awesome'} name={'angle-left'} iconStyle={styles.detail_headerIcon}/>
                    <Text style={styles.detail_headerText}>Back</Text>
                </TouchableOpacity>
                <TabNavigator/>
            </View>
        )
    }
}

const TabNavigator = createMaterialTopTabNavigator({
    Tab1: {
        screen: Tab1,
        navigationOptions: ({ navigation }) => ({
            title: "TAB 1",
            tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'user'}/>
        })
    },
    Tab2: {
        screen: Tab1,
        navigationOptions: ({ navigation }) => ({
            title: "TAB 2",
            tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'cog'}/>
        })
    },
    Tab3: {
        screen: Tab1,
        navigationOptions: ({ navigation }) => ({
            title: "TAB 3",
            tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'window'}/>
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
        showIcon:false,
        showLabel:true,
        style:{
            backgroundColor:'white',
        },
        indicatorStyle:{
            backgroundColor:defaultColor.Red
        },
        labelStyle:{
            color:defaultColor.Red
        }
    }
})