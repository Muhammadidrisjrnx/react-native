import React, {Component} from 'react';
import {FlatList,View, Text, Image,TouchableOpacity,AsyncStorage,ToastAndroid} from 'react-native';
import PropTypes from 'prop-types';
import tes, { AUTH_ONLY_HEADER, BASE_URL } from '../../../class/global';

import styles from './newsList.style.js';
import {ds_News,ds_Lead} from '../../../helper/data.js';
import { getAllService } from '../../../services/webservice/getService';

export default class NewsList extends Component{

    constructor(props){
        super(props);

        this.state=({
            data: []
        });

        getAllService(global.token,'contents').then((res) => {
            console.warn(JSON.stringify(res))
            this.setState({data:res})
        }); 
        
    }

    // NewsList_renderSeparator = () =>{
    //     return(
    //         <View style={styles.separator}/>
    //     )
    // }

    NewsList_keyExtractor = (item, index) => {
        return String(item.id);
    };

    NewsList_renderListItem = ({item}) =>{
        return(
            <View key={item.id} style={styles.listItem_mainContainer}>
            
                <Image 
                //source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                source={{ uri: BASE_URL+'/rest/contents/download/'+item.id, headers: AUTH_ONLY_HEADER(global.token) }}
                 style={styles.listItem_Image}/>
                <View style={styles.listItem_footer}>
                    <Text style={styles.listItem_title}>{item.conTitle}</Text>
                    <TouchableOpacity style={styles.listItem_button} onPress={()=>this.props.navigation.navigate('Detail',{selectedId:item.id,data:item})}>
                        <Text style={styles.listItem_buttonText}>Read More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    render(){
        return(
            <View style={styles.flatlistContainer}>
                <FlatList  
                    data={this.state.data}
                    extraData={this.state}
                    renderItem={this.NewsList_renderListItem}
                    ItemSeparatorComponent={this.NewsList_renderSeparator}
                    contentContainerStyle={styles.flatlist}
                    keyExtractor={this.NewsList_keyExtractor}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}