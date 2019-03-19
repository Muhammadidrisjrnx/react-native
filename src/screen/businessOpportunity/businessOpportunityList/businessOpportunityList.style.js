import{ScaledSheet} from 'react-native-size-matters';

import {colors} from '../../../helper/style/defaultStyle.js'

export default ScaledSheet.create({
    flatlist:{
        backgroundColor:'transparent'
    },
    listItem_mainContainer:{
        borderRadius:'15@s',
        height:'200@vs',
        width:'100%'
    },
    listItem_Image:{
        flex:2,
        resizeMode:'cover',
    },
    listItem_footer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.White
    },
    listItem_title:{
        fontSize:'14@s',
        paddingLeft:'15@s',
        color:colors.Red
    },

    separator:{
        width:'100%',
        height:'15@vs',
        backgroundColor: 'transparent'
    },
    businessOpportunity_titleText:{
        fontSize:'20@s',
        fontWeight:'bold',
        color:colors.White
    },
})