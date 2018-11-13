import React, {Component} from 'react';
import {FlatList,View, Text, Image, ScrollView,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './newsDetail.style.js';
import {ds_News} from '../../../helper/data.js'

export default class NewsDetail extends Component{
    constructor(props){
        super(props);
    }

    _onPress = () => {
        this.props.navigation.goBack();
    }

    render(){
        const { navigation } = this.props;
        const itemId = navigation.getParam('selectedId', '1');

        return(
            <View style={styles.detail_mainContainer}>
                <TouchableOpacity style={styles.detail_headerBackButton} onPress={this._onPress}>
                    <Icon type={'font-awesome'} name={'angle-left'} iconStyle={styles.detail_headerIcon}/>
                    <Text style={styles.detail_headerText}>Back</Text>
                </TouchableOpacity>
                <ScrollView style={styles.detail_schollView}>
                    <Image source={ds_News[itemId-1].newsImage} style={styles.detail_Image}/>
                    <Text style={styles.detail_title}>{ds_News[itemId-1].newsTitle}</Text>
                    <Text style={styles.detail_content}>{ds_News[itemId-1].newsDesc}</Text>
                </ScrollView>
            </View>
        )
    }
}