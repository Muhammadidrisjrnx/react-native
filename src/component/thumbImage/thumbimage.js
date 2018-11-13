import React,{Component} from 'react';
import {Image,View,Text} from 'react-native';
import PropTypes from 'prop-types';

import {scale,verticalScale,moderateScale} from 'react-native-size-matters';

import styles,{colorList} from './thumbimage.style.js';

export default class ThumbImage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                {
                    this.props.isImage && 
                    <Image style = {[{width:scale(this.props.size),
                        height:scale(this.props.size),
                        borderRadius:scale(this.props.size/2)},this.props.style]} source={this.props.source}/>
                }                

                {
                    !this.props.isImage && 
                    <View style={[styles.initialLetterBackground,{width:scale(this.props.size),
                        height:scale(this.props.size),
                        borderRadius:scale(this.props.size/2),
                        backgroundColor:this.props.backgroundColor},this.props.style]}>
                        <Text style={{fontSize:scale(40)*0.4,color:this.props.textColor}}> {this.props.initialLetter} </Text>
                    </View>
                }
            </View>
        )
    }
}

ThumbImage.propTypes = {
    isImage : PropTypes.bool,
    initialLetter : PropTypes.string,
    source : PropTypes.number,
    style : PropTypes.array,
    backgroundColor : PropTypes.string,
    size : PropTypes.number,
    textColor : PropTypes.string
}

ThumbImage.defaultProps = {
    isImage : true,
    initialLetter : '',
    source : 0,
    style : [],
    backgroundColor : colorList.Red,
    size : 50,
    textColor : colorList.White
}