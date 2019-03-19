import{ScaledSheet} from 'react-native-size-matters';

import {colors} from '../../../helper/style/defaultStyle.js'

export const defaultColor = colors;

export default ScaledSheet.create({
    detail_mainContainer:{
        flex:1,
        borderRadius:'5@s',
        width:'100%',
        backgroundColor:colors.White,
        marginBottom:'15@vs'
    },
    detail_Image:{
        flex:2,
        resizeMode:'cover'
    },
    detail_title:{
        fontSize:'20@s',
        padding:'15@s',
        fontWeight:'bold'
    },
    detail_content:{
        fontSize:'13@s',
        paddingHorizontal:'15@s',
        paddingBottom:'15@vs'
    },
    detail_headerBackButton:{
        flexDirection:'row',
        paddingHorizontal:'10@s',
        height:'50@vs',
        alignItems:'center',
        borderBottomColor:colors.Grey,
        borderBottomWidth:'2@vs'
    },
    detail_headerIcon:{
        color:colors.Grey,
        fontSize:'30@s'
    },
    detail_headerText:{
        fontSize:'15@s',
        paddingLeft:'20@s'
    },
    detail_schollView:{
        flex:1,
        paddingBottom:'15@vs'
    },
    businessOpportunity_titleText:{
        fontSize:'20@s',
        fontWeight:'bold',
        color:colors.White
    },
})