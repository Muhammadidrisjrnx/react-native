import React,{Component} from 'react';
import {View,Text,FlatList, TouchableOpacity,ScrollView} from 'react-native';
import {createStackNavigator,NavigationActions} from 'react-navigation';
import {scale, verticalScale} from "react-native-size-matters";
import PropTypes from 'prop-types';
import {Thumbnail} from 'react-native-thumbnail-video';
import {FormInput,FormLabel,FormValidationMessage} from 'react-native-elements';
import {Icon, Fab, Button} from 'native-base';
//import {Icon} from 'react-native-elements';


import MainBody from '../../../component/mainBody/mainBody.js';
import Profile from '../../../component/profile/profile.js';

import styles, {defaultColor,commons} from './goldenNuggetAddScreen.style.js';

export default class GoldenNuggetAddScreen extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            url: ''
        };
      }

    back(){
       this.props.navigation.goBack(null)
    }  
    render(){
        return(
            <View>
                <TouchableOpacity onPress={()=>{this.back()}}>
                    <View style={styles.titleContainer}>
                        <Icon name="arrow-left" type="MaterialCommunityIcons" style={{color:defaultColor.White}} />
                        <Text style={{marginLeft:15,color:defaultColor.White,fontSize:16}}>Back</Text>
                    </View>
                </TouchableOpacity>
                <ScrollView>
                    <View style={commons.card}>
                        <View style={styles.uploadZone}>
                            <Icon type="Entypo" name="video" style={{color:defaultColor.Grey,fontSize:60}}></Icon>
                        </View>
                        <FormLabel>Video Title</FormLabel>
                        <FormInput/>
                        <FormLabel>Paste Link Here</FormLabel>
                        <FormInput/>
                        <TouchableOpacity>
                            <View style={styles.buttonUpload}>
                                <Text style={{color:defaultColor.Red}}>UPLOAD</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}