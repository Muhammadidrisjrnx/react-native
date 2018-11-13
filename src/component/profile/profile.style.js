import {Profile} from 'react-native';

import {ScaledSheet} from  'react-native-size-matters'

import {colors} from '../../helper/style/defaultStyle.js';

export default ScaledSheet.create({
    body:{
        flexDirection:'row',
        padding:'10@s'
    },
    textContainer:{
        alignContent:'center',
    },
    nameText:{
        fontSize:'17@s',
        color:colors.White,
        fontWeight:'bold'
    },
    groupText:{
        fontSize:'13@s',
        color:colors.White
    },
    profileImg:{
        position:'absolute',
        top:'-30@s',
        right:'10@s',
        width:'60@s',
        height:'60@s',
        borderRadius:'30@s',
        zIndex:5
    }
})