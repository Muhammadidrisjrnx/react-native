import React, {Component} from 'react';
import {FlatList,View, Text, Image,TouchableOpacity,AsyncStorage,ToastAndroid} from 'react-native';
import PropTypes from 'prop-types';

import styles from './newsList.style.js';
import {ds_News,ds_Lead} from '../../../helper/data.js';
import Agent from '../../../class/agent.js';

export default class NewsList extends Component{

    constructor(props){
        super(props);
        
        c_agent = new Agent;

        c_agent.getLead().then((item)=>{ToastAndroid.show(JSON.stringify(item),ToastAndroid.SHORT)});
        
         //this._storeData();
    }

    _storeData = async () => {
        try {
            const value = await AsyncStorage.getItem('t_lead');

            if (value !== null) 
            {
                
                var data = JSON.parse(value);
                ToastAndroid.show(String(Object.keys(data).length),ToastAndroid.SHORT);
            } else
            {
                await AsyncStorage.setItem('t_lead', JSON.stringify(ds_Lead));
                ToastAndroid.show('Success!',ToastAndroid.SHORT);
            }
            
        } catch (error) {
            ToastAndroid.show('Failed!',ToastAndroid.SHORT);
        }
      }

    // NewsList_renderSeparator = () =>{
    //     return(
    //         <View style={styles.separator}/>
    //     )
    // }

    NewsList_keyExtractor = (item, index) => {
        return String(item.newsId);
    };

    NewsList_renderListItem = ({item}) =>{
        return(
            <View key={item.newsId} style={styles.listItem_mainContainer}>
                <Image source={item.newsImage} style={styles.listItem_Image}/>
                <View style={styles.listItem_footer}>
                    <Text style={styles.listItem_title}>{item.newsTitle}</Text>
                    <TouchableOpacity style={styles.listItem_button} onPress={()=>this.props.navigation.navigate('Detail',{selectedId:item.newsId})}>
                        <Text style={styles.listItem_buttonText}>Read More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    render(){
        return(
            //<View style={styles.flatlistContainer}>
                <FlatList
                    
                    data={ds_News}
                    renderItem={this.NewsList_renderListItem}
                    ItemSeparatorComponent={this.NewsList_renderSeparator}
                    contentContainerStyle={styles.flatlist}
                    keyExtractor={this.NewsList_keyExtractor}
                    showsVerticalScrollIndicator={false}
                />
            //</View>
        )
    }
}