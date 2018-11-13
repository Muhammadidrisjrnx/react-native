import{ScaledSheet} from 'react-native-size-matters';

import {colors} from '../../helper/style/defaultStyle.js'

export default ScaledSheet.create({
    news_titleContainer:{
        height:'50@vs',
        paddingLeft:'15@s',
        justifyContent:'center',
    },
    news_titleText:{
        fontSize:'20@s',
        fontWeight:'bold',
        color:colors.White
    },
    news_navigationCard:{
        paddingHorizontal:'15@s',
        backgroundColor:'transparent',
    }
})