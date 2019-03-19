import React, {Component} from 'react';
import {FlatList,View, Text, Image, ScrollView,TouchableOpacity} from 'react-native';
import styles from '../scheduleRegistration.style.js';

export default class AajiTab extends Component {
    render() {
        
        return (
            <ScrollView style={styles.tabContainer}>
              <Text>AAJI</Text>
            </ScrollView>
        );
    }
  }
  