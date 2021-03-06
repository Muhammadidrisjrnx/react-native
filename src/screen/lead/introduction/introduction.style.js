import { Platform, StyleSheet } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import {colors} from '../../../helper/style/defaultStyle.js';
export const color=colors;


export default ScaledSheet.create({
    introduce_titleText:{
        fontSize:'20@s',
        fontWeight:'bold',
        color:colors.White,
        marginTop:10
    },introduce_titleContainer:{
        height:'50@vs',
        paddingLeft:'15@s',
        justifyContent:'center'        
    },  
    container: {
        flex            : 1,
        backgroundColor : '#f4f7f9',
        paddingTop      : 30
      },
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#F5FCFF',
    // },
     welcome: {
      //   fontSize: 20,
      //   textAlign: 'center',
      //   margin: 10,
    },
    toggle: {
      //   alignItems: 'center',
        padding: 10,
        backgroundColor: '#403'
    },
    arrow: {
        color: '#fff'
    },
    circle:{
      width: 100,
      height: 100,
      borderRadius: 100/2
    },
    shape_square:{
        backgroundColor:'#fff',
        flexDirection:'column',
        alignSelf:'center',
        // padding:10,
        flex:1,
        marginRight:10,
        marginLeft: 10,
        marginTop:50
    },shape_square_panel:{
        flexDirection:'column',
        borderWidth:1
    },buttonContainer:{
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
        marginRight:'5@s',
    },list_container:{
        flex:1,
        flexDirection:'column',
        borderRadius:4,
        margin:3,
        padding:10,
        paddingTop:30,
        borderWidth:2
    },
    detail_headerBackButton:{
        flexDirection:'row',
        paddingHorizontal:'10@s',
        height:'50@vs',
        alignItems:'center',
        borderBottomColor:colors.White,
        borderBottomWidth:'2@vs'
    },
    detail_headerIcon:{
        fontSize:'30@s'
    },
    detail_headerText:{
        fontSize:'15@s',
        paddingLeft:'20@s',
    },
    detail_mainContainer:{
        flex:1,
        borderRadius:'5@s',
        width:'100%',
        backgroundColor:colors.White,
        marginBottom:'15@vs'
    },


})