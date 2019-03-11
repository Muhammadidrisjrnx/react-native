import React,{Component} from 'react';
import {View,Text,FlatList, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {scale, verticalScale} from "react-native-size-matters";
import PropTypes from 'prop-types';
import {Thumbnail} from 'react-native-thumbnail-video';
import {Icon, Fab, Button} from 'native-base';

import styles,{defaultColor} from './goldenNuggetListScreen.style.js';

export default class GoldenNuggetListScreen extends Component{
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
            <View style={{flex:1,paddingHorizontal:scale(10)}}>
                <FlatList
                    data={dataVid}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    style={{flex:1}}
                    />
                <Fab 
                    active={false}
                    direction="up"
                    position="bottomRight" 
                    style={{backgroundColor:'white'}} 
                    onPress={() => this.props.navigation.navigate('Add')}>
            
                    <Icon name="add" style={{color:defaultColor.Red}}/>
                </Fab>
            </View>
        )
    }
}

const dataVid=[
    {
        id:1,
        desc:"Video 1",
        source:"https://www.youtube.com/watch?v=5E82hd03dRI"
    },
    {
        id:2,
        desc:"Video 2",
        source:"https://www.youtube.com/watch?v=sW-sRhauDzE"
    },
    {
        id:3,
        desc:"Video 3",
        source:"https://www.youtube.com/watch?v=iY7vDZoBbUg"
    }
];