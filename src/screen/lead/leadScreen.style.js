import{ScaledSheet} from 'react-native-size-matters';

import {colors} from '../../helper/style/defaultStyle.js'

export default ScaledSheet.create({
    lead_titleContainer:{
        height:'50@vs',
        paddingLeft:'15@s',
        justifyContent:'center',
    },
    lead_titleText:{
        fontSize:'20@s',
        fontWeight:'bold',
        color:colors.White
    },
    lead_navigatorCard:{
        backgroundColor:'transparent',
        paddingHorizontal:'15@s'
    }
})