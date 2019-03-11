import{ScaledSheet} from 'react-native-size-matters';

import {colors} from '../../../helper/style/defaultStyle.js'

export const defaultColor = colors;

export default ScaledSheet.create({
    schedule_titleContainer:{
        height:'50@vs',
        paddingLeft:'15@s',
        justifyContent:'center',
    },
    schedule_titleText:{
        fontSize:'20@s',
        fontWeight:'bold',
        color:colors.White
    },
    schedule_body:{
        padding:'15@s'
    },
    schedule_buttonTypeContainer:{
        //flex:1,
        flexDirection:'row',
        height:'70@vs',
        marginTop:'10@vs',
        marginHorizontal:'15@s'
    },
    schedule_buttonType:{
        flex:1,
        alignItems:'center',
    },
    schedule_buttonTypeIcon:{
        fontSize:'30@s',
        color:colors.White,
        marginBottom:'3@vs'
    },  
    schedule_buttonText:{
        fontSize:'10@s',
        color:colors.White
    },
    calendar: {
        borderTopWidth: 1,
        paddingTop: 1,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 320
      },
      text: {
        textAlign: 'center',
        borderColor: '#bbb',
        padding: 10,
        backgroundColor: '#eee'
      },
      container: {
        flex: 1,
        backgroundColor: 'gray'
      }
})