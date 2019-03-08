import {StyleSheet,Platform} from 'react-native';

import {colors} from '../../helper/style/defaultStyle.js';

export default StyleSheet.create({
    containerMain:{
        flex:1,
        flexDirection:'row',
        backgroundColor:colors.White,

    },
    containerHeader:{
        alignItems:'center',
        justifyContent:'center',
        height:30,
        ...Platform.select({
            ios:{marginTop:20},
            android:{marginTop:10}
        })
    },
    containerBody:{
        flex:1,
    },
    containerAvatar:{
        height:100,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    containerAvatarText:{
        justifyContent:'space-around',
        flexDirection:'column',
        marginLeft:15
    },
    avatarMainText:{
        color:colors.Grey_Dark,
        fontWeight:'800',
        fontSize:18
    },
    avatarSubText:{
        color:colors.Grey,
    },
    containerFooter:{
        position:'absolute',
        alignSelf:'flex-end',
        flexDirection:'row',
        backgroundColor:colors.White,
        height:50,
        width:'100%'
    },
    headerImage:{
        height:20
    },
    listItem:{
        paddingTop:10,
        paddingBottom:10,
        marginLeft:20,
        marginRight:20,
        borderBottomWidth: 1,
        borderBottomColor: colors.Grey_Light
    },
    listIcon:{
        width:25,
        color:colors.Red,
        fontSize:30,
        marginLeft:0
    },
    listText:{
        color:colors.Grey,
        fontSize:17
    }
})
