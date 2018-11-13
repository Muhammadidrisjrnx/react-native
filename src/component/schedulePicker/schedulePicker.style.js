import {ScaledSheet} from 'react-native-size-matters';

import {colors, screenWidth} from '../../helper/style/defaultStyle.js';

export const defaultColor = colors;

export default ScaledSheet.create(
    {
        listItem_TouchableOpac:{
            //flex:1,
            flexDirection:'row',
            backgroundColor:colors.White,
            alignItems:'center',
            justifyContent:'space-between',
            height:'70@vs'
        },
        listItem_mainContainer:{
           
        },
        flatlist:{
            backgroundColor: colors.White,
            borderRadius:'10@s'
        },
        listItem_leftIcon:{
            color:colors.Red,
            alignSelf:'center',
            padding:'10@s',
            fontSize:'30@s'
        },
        listItem_textContainer:{
            position:'absolute',
            left:'50@s'
        },
        listItem_rightIcon:{
            color:colors.Grey,
            fontSize:'30@s',
            paddingRight:'10@s'
        },
        listItem_textTitle:{
            color:colors.Black,
            fontSize:'15@s',
            fontWeight:'bold'
        },
        listItem_textSubTitle:{
            color:colors.Black,
            fontSize:'12@s'
        },
        detail_mainContainer:{
            flex:1,
            backgroundColor:colors.White,
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
        detail_subContainer:{
            marginBottom:'25@vs'
        },
        detail_textContainer:{
            width:'100%',
            flexDirection:'row',
            justifyContent:'space-between',
            padding:'15@s',
        },
        detail_separator:{
            width:'95%',
            height:'1@vs',
            backgroundColor:colors.Grey,
            alignSelf:'center'
        },
        detail_leftText:{
            fontSize:'13@s',
        },
        detail_rightText:{
            fontSize:'13@s',
        },
        detail_button:{
            width:'70%',
            height:'30@vs',
            borderColor:colors.Red,
            borderRadius:'10@s',
            justifyContent:'center',
            alignItems:'center',
            borderWidth:'2@s',
            alignSelf:'center'
        },
        detail_buttonText:{
            fontSize:'15@s',
            color:colors.Red
        },
    }
)