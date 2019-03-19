import React, {Component} from 'react';
import {FlatList,View, Text, Image, ScrollView,TouchableOpacity} from 'react-native';
import styles from '../scheduleRegistration.style.js';
import SchedulePicker from '../../../../component/schedulePicker/schedulePicker.js';

export default class BosTab extends Component {
    render() {
        
        return (
            <View>
              <SchedulePicker/>
            </View>
        );
    }
  }
  