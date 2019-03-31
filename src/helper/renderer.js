import React,{Component} from 'react';
import {View, Text} from 'react-native';
import styles from './style/defaultStyle';

export const renderNoData = () =>{
    console.warn('render no data')
    return(
        <View style={styles.noDataContainer}>
        <Text style={styles.noDataText}>Tidak ada data</Text>
        </View>
    )
}