import {StyleSheet,Platform} from 'react-native';

import {colors} from '../../helper/style/defaultStyle.js';

export default StyleSheet.create({
    containerMain:{
        flex:1,
        flexDirection:'row',
        backgroundColor:colors.Red,

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
        color:colors.White,
        fontSize:18
    },
    avatarSubText:{
        color:colors.White,
    },
    containerFooter:{
        position:'absolute',
        alignSelf:'flex-end',
        flexDirection:'row',
        backgroundColor:colors.Red,
        height:50,
        width:'100%'
    },
    headerImage:{
        height:20
    },
    listIcon:{
        width:25,
        color:colors.White,
        fontSize:30
    },
    listText:{
        color:colors.White,
        fontSize:17
    }
})
