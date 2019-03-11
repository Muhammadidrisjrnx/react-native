import React,{Component} from 'react';
import {FlatList,View,Text,ScrollView,TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import {Dropdown} from 'react-native-material-dropdown';
import {verticalScale,scale} from 'react-native-size-matters';
import {createStackNavigator,NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';

import {Calendar} from 'react-native-calendars';
import styles,{defaultColor} from './scheduleDetail.style.js';
import {ds_schedulePersonList} from '../../../helper/data.js';


export default class ScheduleDetail extends Component{

    constructor(props) {
        super(props);
        
      }

    back(){
        this.props.navigation.dispatch(NavigationActions.back())
    }

    _renderListItem = ({item}) => {
        return (
        <View style={{flex:1,margin:10}}>
            <Text style={{fontSize:16}}>{item.name}</Text>
        </View>
        );
    }

    _keyExtractor = (item, index) => {
        return String(item.id);
    };

    render(){
        
        return(
            <View>
            <TouchableOpacity onPress={()=>{this.back()}}>
                <View style={styles.titleContainer}>
                    <Icon name="arrow-left" type="MaterialCommunityIcons" style={{color:defaultColor.White}} />
                    <Text style={{marginLeft:15,color:defaultColor.White,fontSize:16}}>Back</Text>
                </View>
            </TouchableOpacity>
            <FlatList
                data={ds_schedulePersonList}
                renderItem={this._renderListItem}
                contentContainerStyle={styles.flatlist}
                showsVerticalScrollIndicator={false}
                keyExtractor={this._keyExtractor}
                numColumns={2}
                style={styles.container}
            />
            </View>
        );
    }

   
}