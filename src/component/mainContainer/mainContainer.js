import React,{Component} from 'react';
import {View, ImageBackground} from 'react-native';

import style from './mainContainer.style.js';

export default class MainContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={style.containerMain}>
                <ImageBackground source={this.props.sourceImage} style ={style.containerImage} blurRadius={5}>
                    {this.props.children}
                </ImageBackground>
            </View>
        )
    }
}
