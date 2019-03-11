import{ScaledSheet} from 'react-native-size-matters';

import {colors} from '../../helper/style/defaultStyle.js'

export const defaultColor = colors;

export default ScaledSheet.create({
    goldenNugget_titleContainer:{
        height:'50@vs',
        paddingLeft:'15@s',
        justifyContent:'center',
    },
    goldenNugget_titleText:{
        fontSize:'20@s',
        fontWeight:'bold',
        color:colors.White
    },
    child:{
        backgroundColor:'transparent'
    },

})