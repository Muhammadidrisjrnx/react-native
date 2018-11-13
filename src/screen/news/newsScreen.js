import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {scale,verticalScale,moderateScale} from 'react-native-size-matters'
import PropTypes from 'prop-types';

import MainBody from '../../component/mainBody/mainBody.js';
import Profile from '../../component/profile/profile.js';
import NewsList from './newsList/newsList.js';
import NewsDetail from './newsDetail/newsDetail.js';
import styles from './newsScreen.style.js';

const NewsRouter = createStackNavigator(
    {
      List:NewsList,
      Detail:NewsDetail,
    },
    {  
      headerMode:'none',
      cardStyle:styles.news_navigationCard
    }
  )

export default class NewsScreen extends Component{
    // addProps = {
    //     data: this.props.data,
    //     onPress: this.props.onPress,
    //     navigation:this.props.navigation, 
    //     }

    render(){
        return(
            <MainBody source={require('../../../resource/image/bg.jpg')}>
                <Profile imageOnly={true} source={require('../../../resource/image/profile.jpg')} name="Fandi Fadillah" group="Agency BEST"/>
                <View style={styles.news_titleContainer}>
                    <Text style={styles.news_titleText}>News</Text>
                </View>
                <NewsRouter />
            </MainBody>
        )
    }
}