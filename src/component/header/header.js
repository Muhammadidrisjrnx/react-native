import React,{Component} from 'react';
import {View,ImageBackground} from 'react-native';
import {Button, Icon, Thumbnail} from 'native-base';

import style from './header.style.js';

export default class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={style.container}>
                <ImageBackground style={style.image} source={require('../../../resource/image/title.png')} resizeMode={'contain'}>
                <View style={style.containerButton}>
                    <Button style={style.button} onPress={() => {
                                this.props.navigation.openDrawer()
                            }}>
                        <Icon type="MaterialIcons" name="dehaze"></Icon>
                    </Button>
                    {/* <View style={style.containerThumbnail}>
                        <Thumbnail style={style.thumbnail} source={require('../../../resource/image/profile.jpg')}/>
                    </View> */}
                </View>
                </ImageBackground>
            </View>
        
        )
    }
}
