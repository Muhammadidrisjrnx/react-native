import React,{Component} from 'react';

import {View,Text,Platform} from 'react-native';
import PropTypes from 'prop-types';

import {Thumbnail} from 'native-base';

import styles from './profile.style.js';

export default class Profile extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.body}>
            {
                (!this.props.imageOnly) &&
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>Welcome {this.props.name}</Text>
                    <Text style={styles.groupText}>Group Agency : {this.props.group}</Text>
                </View>
            }
                <Thumbnail circular source={this.props.source} style={styles.profileImg}/>
            </View>
        )
    }
}

Profile.propTypes = {
    imageOnly : PropTypes.bool,
    name : PropTypes.string,
    group : PropTypes.string,
    source : PropTypes.number,
}

Profile.defaultProps = {
    imageOnly: false,
    name : '',
    group : '',
    source : '',
}