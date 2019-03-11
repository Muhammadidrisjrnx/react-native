import {ScaledSheet} from 'react-native-size-matters';

import {colors, screenWidth} from '../../helper/style/defaultStyle.js';
import { relativeTimeRounding } from 'moment';

export const defaultColor = colors;

export default ScaledSheet.create(
{
    mainContainer:{
        padding:20
    },
    card:{
        marginBottom:20,
        borderRadius:'5@s',
        backgroundColor: colors.White
    },
    chartContainer:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'row'
    },
    pieChartContainer:{
        left:'-20%'
    },
    pieChart:{
        height:200,
        width:200,
    },
    iconChartContainer:{
        position: 'absolute',
        left:'42%',
        top:'40%',
        zIndex:5
    },
    icon:{
        color:colors.Red,
        fontWeight: '800',
    },
    chartInfo:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        position:'absolute',
        left:'60%',
        top:'35%'
    },
    textBold:{
        color:colors.Black,
        fontWeight:'600',
        fontSize:24
    },
    text:{
        fontSize:16
    },
    listInfoItem:{
        flexDirection:'row',
        padding:20,
        borderTopWidth:1,
        borderTopColor:colors.Grey
    },
    listInfoItemContent:{
        flexDirection:'column',
        marginLeft:20
    },
    infoItem:{
        flex:1,
        alignSelf:'stretch'
    },
    infoHorizontalTop:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        margin:20
    },
    infoHorizontalBottom:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginBottom:20,
        marginLeft:20,
        marginRight:20,
    },
    infoText:{
        fontSize:14,
        textAlign:'center'
    },
    infoTextBold:{
        color:colors.Red,
        fontWeight:'600',
        fontSize:20,
        textAlign:'center'
    },
    verticalDivider:{
        alignSelf:'stretch',
        borderRightWidth:1,
        borderRightColor:colors.Red
    }
})