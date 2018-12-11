import {ScaledSheet} from 'react-native-size-matters';

import {colors, screenWidth} from '../../../helper/style/defaultStyle.js';

export const defaultColor = colors;

export default ScaledSheet.create(
    {
        listItem_TouchableOpac:{
            height:'90@vs'
        },
        listItem_mainContainer:{
            flex:1,
            flexDirection:'row',
            backgroundColor:colors.White,
            alignItems:'center',
            justifyContent:'space-between',
            paddingLeft:'10@s',
            
        },
        flatlist:{
            backgroundColor: colors.White,
            borderRadius:'10@s'
        },
        listItem_textContainer:{
            flex:1,
            position:'absolute',
            alignContent:'center',
            left:'70@s'
        },
        listItem_rightIcon:{
            color:colors.Grey,
            fontSize:'30@s',
            paddingRight:'10@s'
        },
        listItem_textTitle:{
            //color:colors.Black,
            fontSize:'15@s',
            fontWeight:'bold',
        },
        listItem_textSubTitle:{
            //color:colors.Black,
            fontSize:'12@s',
        },
        agentApprovaList_separator:{
            backgroundColor:colors.Grey,
            height:'1@vs'
        },
        
    }
)