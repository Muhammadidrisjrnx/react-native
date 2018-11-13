import {ScaledSheet} from 'react-native-size-matters';

import {colors} from '../../helper/style/defaultStyle.js';

export const colorList = colors;

export default ScaledSheet.create({
    initialLetter:{
        fontSize:40, 
        color:'white', 
        marginBottom:5
    },
    initialLetterBackground:{
        // width:100,
        // height:100,
        // backgroundColor:'red',
        // borderRadius:50, 
        alignItems:'center',
        justifyContent:'center'
    }
})