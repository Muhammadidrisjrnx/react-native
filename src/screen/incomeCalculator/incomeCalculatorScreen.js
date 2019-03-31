import React,{Component} from 'react';
import {View,Text, ScrollView} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import PropTypes from 'prop-types';

import MainBody from '../../component/mainBody/mainBody.js';
import Profile from '../../component/profile/profile.js';

import styles, {defaultColor} from './incomeCalculatorScreen.style.js';

import {createMaterialTopTabNavigator  } from 'react-navigation';
import { IncomeCalculatorPerYearScreen } from './perYear/incomeCalculatorPerYearScreen.js';
import NewsDetail from '../news/newsDetail/newsDetail.js';



export default class IncomeCalculatorScreen extends Component{

    render() {
            const years = {};
            for (let i = 1; i <= 5; i++) {
                years["Year" + i] = {
                    //screen: () => <IncomeCalculatorPerYearScreen year={i} navigation={this.props.navigation}/>,
                    screen: props => <IncomeCalculatorPerYearScreen year={i} {...props}/>,
                    navigationOptions: ({
                        navigation
                    }) => ({
                        title: "Year " + i
                    })
                }
            }

            const TabNavigator = createMaterialTopTabNavigator(years, {
                lazy: true,
                swipeEnabled: true,
                animationEnabled: true,
                style: {
                    backgroundColor: 'white'
                },
                navigationOptions: {
                    gesturesEnabled: true
                },
                tabBarOptions: {
                    showIcon: false,
                    showLabel: true,
                    style: {
                        backgroundColor: 'white'
                    },
                    indicatorStyle: {
                        backgroundColor: defaultColor.Red
                    },
                    labelStyle: {
                        color: 'red'
                    }
                },
            });

        return(
            <MainBody source={require('../../../resource/image/bg.jpg')}>
                <Profile imageOnly={true} source={require('../../../resource/image/profile.jpg')} name="Fandi Fadillah" group="Agency BEST"/>
                <View style={styles.incomeCalculator_titleContainer}>
                    <Text style={styles.incomeCalculator_titleText}>Income Calculator</Text>
                </View>
                <TabNavigator/>
            </MainBody>
        )
    }
}