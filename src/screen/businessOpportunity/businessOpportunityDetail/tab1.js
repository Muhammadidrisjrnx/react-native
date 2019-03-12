import React, {Component} from 'react';
import {FlatList,View, Text, Image, ScrollView,TouchableOpacity} from 'react-native';
import styles from './businessOpportunityDetail.style.js';
import {ds_BusinessOpportunity} from '../../../helper/data.js';

export default class Tab1 extends Component {
    render() {
        
        return (
            <ScrollView style={styles.detail_schollView}>
                <Image source={ds_BusinessOpportunity[1].businessOpportunityImage} style={styles.detail_Image}/>
                <Text style={styles.detail_title}>{ds_BusinessOpportunity[1].businessOpportunityTitle}</Text>
                <Text style={styles.detail_content}>{ds_BusinessOpportunity[1].businessOpportunityDesc}</Text>
            </ScrollView>
        );
    }
  }
  