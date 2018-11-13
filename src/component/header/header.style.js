import {StyleSheet} from 'react-native';

import {colors} from '../../helper/style/defaultStyle.js';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.Red,
        flexDirection:'row',
        justifyContent:'center'
    },
    containerButton:{
        flex:1, 
        justifyContent:'center'
    },
    containerThumbnail:{
        marginRight:20
    },
    image:{
        flex:1,
        height:20,
        alignSelf:'center'
    },
    button:{
        position:'absolute',
        backgroundColor:colors.Red,
        elevation:0
    },
    thumbnail:{
        position:'absolute',
        alignSelf:'flex-end',
    }
})