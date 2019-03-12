import {ScaledSheet} from 'react-native-size-matters';

import {colors, screenWidth} from '../../../helper/style/defaultStyle.js';

export const defaultColor = colors;

export default ScaledSheet.create(
    {
        tabContainer:{
            flex: 1, 
            //justifyContent: 'center', 
            alignItems: 'center',
            padding:'15@s'
        },
        itemContainer:{
            width:'100%',
            flexDirection:'row',
            marginBottom:'10@s',
            borderBottomWidth:'1@s',
            borderBottomColor:colors.Grey
        },
        itemTitleContainer:{
            width:'100%',
            marginBottom:'10@s',
            alignItems:'center',
        },
        itemTitle:{
            color:colors.Black,
            fontSize:'25@s',
            //marginTop:'5@s'
        },
        itemDetail:{
            flex:1,
            alignItems:'center',
        },
        buttonContainer:{
            marginVertical:'10@vs',
            flexDirection:'row',
            height:'60@vs'
        },
        buttonOpac:{
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            borderWidth:'2@s',
            borderRadius:'10@s',
            borderColor:colors.Red,
            marginHorizontal:'5@s',
            backgroundColor:colors.White
        },
        buttonText:{
            color:colors.Red,
            fontSize:'15@vs',
            marginRight:'5@s'
        },
        buttonIcon:{
            color:colors.Red,
            fontSize:'20@vs'
        },
        star:{
            color:colors.Yellow,
            fontSize:'20@vs',
            marginLeft:5,
            alignSelf:'flex-end'
        },
        qualified:{
            color:colors.Green,
            fontSize:'20@vs',
            marginLeft:5,
            alignSelf:'flex-end'
        },
        unqualified:{
            color:colors.Red,
            fontSize:'20@vs',
            marginLeft:5,
            alignSelf:'flex-end'
        }
    }
)