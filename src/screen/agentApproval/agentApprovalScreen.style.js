import{ScaledSheet} from 'react-native-size-matters';

import {colors} from '../../helper/style/defaultStyle.js'

export default ScaledSheet.create({
    agentApproval_titleContainer:{
        height:'50@vs',
        paddingLeft:'15@s',
        justifyContent:'center',
    },
    agentApproval_titleText:{
        fontSize:'20@s',
        fontWeight:'bold',
        color:colors.White
    },
    agentApproval_body:{},
})