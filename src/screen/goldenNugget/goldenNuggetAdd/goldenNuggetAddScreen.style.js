import{ScaledSheet} from 'react-native-size-matters';

import {colors} from '../../../helper/style/defaultStyle.js';
import commonStyle from '../../../styles/common.style.js';

export const defaultColor = colors;

export const commons = commonStyle;

export default ScaledSheet.create({
    titleContainer:{
        flexDirection:'row',
        justifyContent:'flex-start',
        paddingLeft:20,
        alignItems:'center'
    },
    title:{
        color:colors.White
    },  
    uploadZone:{
        borderRadius:10,
        borderColor:colors.Grey_Light,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderStyle:'dashed',
        height:200,
        margin:20
    },
    buttonUpload:{
        flexBasis:1,
        padding:25,
        margin:15,
        borderColor:colors.Red,
        borderStyle:'solid',
        borderWidth:1,
        borderRadius:5,
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center'
    }
});