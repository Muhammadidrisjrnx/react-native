import React,{Component} from 'react';
import {View,Text,FlatList, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {scale, verticalScale} from "react-native-size-matters";
import PropTypes from 'prop-types';
import {Thumbnail} from 'react-native-thumbnail-video';
import {Icon, Fab, Button} from 'native-base';

import MainBody from '../../component/mainBody/mainBody.js';
import Profile from '../../component/profile/profile.js';

import styles,{defaultColor} from './goldenNugget.style.js';
import GoldenNuggetAddScreen from './goldenNuggetAdd/goldenNuggetAddScreen.js';
import GoldenNuggetListScreen from './goldenNuggetList/goldenNuggetListScreen.js';

const GoldenNuggetRouter = createStackNavigator({
    List:GoldenNuggetListScreen,
    Add:GoldenNuggetAddScreen,
},
{  
    headerMode:'none',
    cardStyle:styles.child
})

export default class GoldenNuggetScreen extends Component{
    constructor(props) {
        super(props);
    }

    _keyExtractor = (item, index) => String(item.id);

    _renderItem = ({item, index}) => {

        return(
        <View key={String(item.id)} style={{width:'100%', height:verticalScale(250),backgroundColor:"white", marginBottom:verticalScale(20)}}>
            <Thumbnail url={item.source}/>
            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between', paddingHorizontal:scale(10)}}>
                <Text style={{fontSize:scale(15)}}>
                    {item.desc}
                </Text>
                <TouchableOpacity>
                    <Icon name="trash" type="Ionicons" style={{color:defaultColor.Red}} />
                </TouchableOpacity>
            </View>
        </View>
      )
    }

    render(){
        return(
            <MainBody source={require('../../../resource/image/bg.jpg')}>
                <Profile imageOnly={true} source={require('../../../resource/image/profile.jpg')} name="Fandi Fadillah" group="Agency BEST"/>
                <View style={styles.goldenNugget_titleContainer}>
                    <Text style={styles.goldenNugget_titleText}>Golden Nugget</Text>
                </View>
                <GoldenNuggetRouter/>
            </MainBody>
        )
    }
}