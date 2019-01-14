import {ScaledSheet} from 'react-native-size-matters';

import {colors, screenWidth} from '../../helper/style/defaultStyle.js';

export const defaultColor = colors;

export default ScaledSheet.create(
{
    buttonIcon:{
        color:colors.Red,
        fontSize:'20@vs'
    },
    itemDetail:{
        color: colors.Red,
        alignSelf:'center',
        fontSize:'20@s',
        fontWeight:'bold',
        marginTop:'15@vs'
    },
    tabMainContainer:{
        flex:1,
        padding:'10@s' 
    },
    tabSubContainer:{
        alignItems:'center',
        borderWidth:'3@s',
        borderColor:colors.Red,
        marginBottom:'10@vs'
    },
    lead_headerContainer:{
        alignItems:'center',
        paddingBottom:'15@s'
    },
    lead_headerCaption:{
        fontSize:'20@s'
    },
    lead_headerNumber:{
        fontSize:'40@s',
        fontWeight:'bold',
        includeFontPadding:false
    },
    lead_bodyContainer:{
        width:'100%',
        //height:'100@vs',
        flexDirection:'row'
    },
    lead_bodyRowContainer:{
        alignItems:'center',
        flex:1
    },
    lead_bodyNumber:{
        fontSize:'25@s'
    },
    lead_bodyCaption1:{
        fontSize:'15@s'
    },
    lead_bodyCaption2:{
        fontSize:'13@s',
    },
    app_container:{
        alignItems:'center',
        paddingBottom:'15@s'
    },
    app_titleText:{
        fontSize:'18@s',
        marginBottom:'15@vs'
    },
    app_rowContainer:{
        width:'100%',
        height:'60@vs',
        flexDirection:'row'
    },
    app_itemContainer:{
        flex:1,
        alignItems:'center', 
        justifyContent:'center'
    },
    app_textNumber:{
        fontSize:'25@s',
        fontWeight:'600'
    },
    app_textCaption:{
        fontSize:'13@s'
    }

})