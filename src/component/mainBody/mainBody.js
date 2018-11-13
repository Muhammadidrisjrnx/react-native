import React,{Component} from 'react';

import {View,ImageBackground,Platform} from 'react-native';

import styles from './mainBody.style.js';

export default class MainBody extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.body}>
                <ImageBackground style={[styles.backgroundImage,this.props.style]} source={this.props.source} resizeMode={'cover'}
                {...Platform.select({ios:{blurRadius:3},android:{blurRadius:3}})}>
                    {this.props.children}
                </ImageBackground>
            </View>
        )
    }
}