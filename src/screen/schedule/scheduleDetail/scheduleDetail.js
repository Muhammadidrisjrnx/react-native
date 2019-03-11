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
        <View style={{flex:1,margin:10,flexDirection:'row',alignItems:'center'}}>
            <Icon name="user-circle" type="FontAwesome" style={{color:defaultColor.Red,marginRight:10}} />
            <Text style={{fontSize:16}}>{item.name}</Text>
        </View>
        );
    }

    _keyExtractor = (item, index) => {
        return String(item.id);
    };

    render(){
        
        dataList = ds_schedulePersonList.sort((a,b)=>{
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
        })

        a = dataList.slice(0,dataList.length/2)
        b = dataList.slice(dataList.length/2, dataList.length)
        if(b.length>a.length){
            a.push(b[0])
            b.shift()
        }
        dataList = []
        for(i=0,j=0;i<a.length;i++){
            dataList[j] = a[i]
            j++
            if(i<b.length){
                dataList[j]=b[i]
                j++
            }
        }

        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.back()}} style={styles.header}>
                    <View style={styles.titleContainer}>
                        <Icon name="arrow-left" type="MaterialCommunityIcons" style={{color:defaultColor.Grey_Dark}} />
                        <Text style={{marginLeft:15,color:defaultColor.Grey_Dark,fontSize:16}}>Back</Text>
                    </View>
                </TouchableOpacity>
                <FlatList
                    data={dataList}
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