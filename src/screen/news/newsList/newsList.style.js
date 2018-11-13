import{ScaledSheet} from 'react-native-size-matters';

import {colors} from '../../../helper/style/defaultStyle.js'

export default ScaledSheet.create({
    flatlist:{
        backgroundColor:'transparent'
    },
    listItem_mainContainer:{
        borderRadius:'15@s',
        height:'200@vs',
        width:'100%'
    },
    listItem_Image:{
        flex:2,
        resizeMode:'cover',
    },
    listItem_footer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.White
    },
    listItem_title:{
        fontSize:'15@s',
        paddingLeft:'15@s',
        fontWeight:'bold'
    },
    listItem_button:{
        justifyContent:'center',
        alignItems:'center',
        margin:'15@s',
        borderColor:colors.Red,
        paddingHorizontal:'15@s',
        borderWidth:'1@s',
        borderRadius:'5@s'

    },
    listItem_buttonText:{
        fontSize:'15@s',
        color:colors.Red
    },
    separator:{
        width:'100%',
        height:'15@vs',
        backgroundColor: 'transparent'
    },
})