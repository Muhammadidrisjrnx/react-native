import React,{Component} from 'react';
import {FlatList, View, Text, TouchableOpacity, AsyncStorage, ToastAndroid, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

import ThumbImage from '../../../component/thumbImage/thumbimage.js'

import styles from './introduction.style.js';

export default class Introduction extends Component{
    constructor(props){
        super(props);

        this.circle = this.circle.bind(this);
        this.degToRad = this.degToRad.bind(this);
    }

    degToRad = (deg) => {
        return deg * Math.PI / 180;
      }

    circle = (props) => {
        const { size, symbolSize, itemCount } = props;

        
        const radius = size / 2;
        const center = radius;

        // Calculate symbol position
        // Subtract half of symbol size to center it on the circle

        var dots = [];

        for(let i = 1; i <= itemCount; i++){
            const angleRad = this.degToRad(i*(360/itemCount));
            const x = radius * Math.cos(angleRad) + center - symbolSize / 2;
            const y = radius * Math.sin(angleRad) + center - symbolSize / 2;

            dots.push(
                <View
                    style={[
                    s.symbol, {
                        width: symbolSize,
                        height: symbolSize,
                        borderRadius: symbolSize / 2,
                        left: x,
                        top: y,
                    }]}
                />
            )
        }

        return (
            <View
            style={[s.circle, {
                width: size,
                height: size,
                borderRadius: size / 2,

            }]}
            >
            <Text style={s.circleCaption}>A</Text>
            {
                dots
            }
            {/* <View
                style={[
                s.symbol, {
                    width: symbolSize,
                    height: symbolSize,
                    borderRadius: symbolSize / 2,
                    left: x,
                    top: y,
                }]}
            /> */}
            </View>
        );
        
    }

    render(){
        return(
            <View style={{flex:1}}>
            <this.circle
                size={100}
                symbolSize={16}
                itemCount={5}
                />
            </View>
        )
    }
}

const s = StyleSheet.create({
    circle: {
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    circleCaption: {
      fontSize: 70,
    },
    symbol: {
      backgroundColor: 'green',
      position: 'absolute',
    },
  });