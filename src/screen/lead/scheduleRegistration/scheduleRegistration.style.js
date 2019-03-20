import {ScaledSheet} from 'react-native-size-matters';

import {colors} from '../../../helper/style/defaultStyle.js';

export const defaultColor = colors;

export default ScaledSheet.create(
    {
        tabContainer:{
            padding:20
        },
        detail_headerText:{
            fontSize:'15@s',
            paddingLeft:'20@s',
        },
        detail_mainContainer:{
            flex:1,
            borderRadius:'5@s',
            width:'100%',
            backgroundColor:colors.White,
            marginBottom:'15@vs'
        },
        detail_headerIcon:{
            color:colors.Grey,
            fontSize:'30@s'
        },
        detail_headerBackButton:{
            flexDirection:'row',
            paddingHorizontal:'10@s',
            height:'50@vs',
            alignItems:'center',
            borderBottomColor:defaultColor.Grey_Light,
            borderBottomWidth:'2@vs'
        },
    }
)