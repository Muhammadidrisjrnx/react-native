import React, { Component } from 'react';
import {View,Text,Image} from 'react-native';
import styles,{color} from './introduce.style.js';
import MainBody from '../../component/mainBody/mainBody.js'
import Profile from '../../component/profile/profile.js';
export default class introduce_page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainBody source={require('../../../resource/image/bg.jpg')}>
      <Profile imageOnly={true} source={require('../../../resource/image/profile.jpg')} name="Fandi Fadillah" group="Agency BEST"/>
      <View style={styles.introduce_titleContainer}>
          <Text style={styles.introduce_titleText}>Introduction</Text>
      </View>
      <View>
      
      </View>
      </MainBody>
      );
  }
}
