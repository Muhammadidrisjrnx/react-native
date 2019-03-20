import {Platform} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters' 

import {colors} from '../../helper/style/defaultStyle.js';

export const defaultColor = colors;

export default ScaledSheet.create({
    overlay:{
        opacity:0.5
        ,flex:1
        , backgroundColor:'black'
        ,justifyContent:'center'
        ,alignItems:'center'
    },
    mainContainer:{
        position: 'absolute'
        ,top: 0
        ,left: 0
        ,right: 0
        ,bottom: 0
        ,justifyContent: 'center'
        ,alignItems: 'center'
    },
    flatlistContainer:{
        // height:'550@vs',
        width:'250@s',
        backgroundColor:colors.White,
        borderRadius:'5@s',
        paddingBottom:'15@vs',
    },
    flatlist:{
        borderRadius:'5@s'
    },
    titleContainer:{
        height:'50@s',
        borderBottomWidth:'2@s',
        borderBottomColor:colors.Grey,   
        paddingLeft:'15@s',
        justifyContent:'center',
        marginBottom :'15@vs',
    },
    titleText:{
        fontSize:'14@s',
        fontWeight:'bold'
    },
    listItemContainer:{
        flexDirection:'row',
        backgroundColor:colors.White,
        paddingLeft:'15@s',
        paddingRight:'40@s',
        marginVertical:'4@vs',
        alignItems:'center',
    },
    listItemIcon:{
        color:colors.Red,
    },
    listItemText:{
        marginLeft:'8@s',
        fontSize:'13@s'
    }
})