import {Platform} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import {colors} from '../../helper/style/defaultStyle.js';

export const color=colors;

export default ScaledSheet.create({
    mainContainer:{
        flex:1
    },
    header:{
        flex:1,
        backgroundColor:colors.Red,
        justifyContent:'center'
    },
    mainBody:{
        justifyContent:'center'
    },
    imageTitle:{
        width:null,
        height:'25@s',
        resizeMode:'contain',
    },
    loginContainer:{
        height:'300@vs',
        justifyContent:'space-evenly', 
    },
    loginForm:{
        width:'250@s',
        alignSelf:'center',
    },
    loginTextTitle:{
        color:colors.White,
        fontSize:'20@s',
        alignSelf:'center',

    },
    formItem:{
        marginLeft:0,
    },
    inputIcon:{
        color:colors.White
    },
    input:{
        color:colors.White 
    },
    loginButton:{
        borderColor:colors.White,
        width:'250@s',
        borderRadius:'5@s',
        justifyContent:'center',
        alignSelf:'center',
    },
    loginText:{
        color:colors.White,
    }
})