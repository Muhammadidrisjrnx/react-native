import{ScaledSheet} from 'react-native-size-matters';

import {colors} from '../../helper/style/defaultStyle.js'

export default ScaledSheet.create({
    businessOpportunity_titleContainer:{
        height:'50@vs',
        paddingLeft:'15@s',
        justifyContent:'center',
    },
    businessOpportunity_titleText:{
        fontSize:'20@s',
        fontWeight:'bold',
        color:colors.White
    },
    businessOpportunity_body:{},
})