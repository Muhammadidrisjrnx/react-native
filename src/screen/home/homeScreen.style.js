import {ScaledSheet} from 'react-native-size-matters';

import {colors, screenWidth} from '../../helper/style/defaultStyle.js';

export const defaultColor = colors;
export default ScaledSheet.create(
{
    TabContainer:{
        
    },
    buttonIcon:{
        color:colors.Red,
        fontSize:'20@vs'
    },
    lead_headerContainer:{
        borderWidth:1,
    },
    attend_bos_Container:{
        padding:'20@s',
        borderWidth:1,
    },
    submitted_Container:{
        padding:'20@s',
        borderWidth:1,
    },          
    MainContainer1:{
        backgroundColor:'#fff',
        marginLeft:10,
        marginRight:10,
        marginTop:20,
       },
    MainContainer2:{
        backgroundColor:'#fff',
        flex:1,
        marginTop:20,
        // marginLeft:10,
        // marginRight:10,
        marginBottom:20
    },
    lead_headerCaption:{
        fontSize:'15@s'
    },
    home_titleText:{
        fontSize:'16@s',
        fontWeight:'bold',
        color:colors.White,
        marginTop:10
    },
    home_descText:{
        fontSize:'14@s',
        color:colors.White,
        marginTop:5,
        marginBottom:15
    },

    home_titleContainer:{
        height:'50@vs',
        paddingLeft:'15@s',
        justifyContent:'center'        
    },
    texton_container2:{
        fontSize:20,
        color:colors.Red
    },
    texton_container1:{
        fontSize:20,
        color:colors.Black,
        fontWeight:'bold'
    },    
    pieChartContainer:{
        left:'10%',
        alignSelf:'center',
        flexDirection: 'column',
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
        color:colors.Red
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
    },
    buttonContainer:{
        marginVertical:'10@vs',
        flexDirection:'row',
        height:'60@vs'
    },
})    