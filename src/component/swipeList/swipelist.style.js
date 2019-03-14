import {Platform} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters' 

import {colors} from '../../helper/style/defaultStyle.js';

export const defaultColor = colors;

export default ScaledSheet.create({
    mainContainer:{
        
    },
    searchContainer:{
        flexDirection:'row',
    },
    searchBar:{
        flex:1,
        backgroundColor:'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
    },
    searchBarInput:{
        backgroundColor:colors.White,
        fontSize:'11@s',
        marginHorizontal:0,
        paddingLeft:'30@s'
    },
    searchSortIcon:{
        width:'30@s',
    },
    flatlist:{
        backgroundColor:colors.White,
        flex:1,
    },
    listItem_ColumnDivider:{
        flex:1,
        flexDirection:'row',
        padding:'10@s',
        backgroundColor:colors.White,
        justifyContent:'center'
    },
    listItem_TextContainer:{
        flex:1,
        marginLeft:'10@s'
    },
    listItem_Title:{
        fontSize:'15@s',
        fontWeight:'bold',
    },
    listItem_SubTitleContainer:{
        flex:1,
        flexDirection:'row',
    },
    listItem_SubTitleCaption:{
        flex:1,
        fontSize:'10@s',
    },
    listItem_SubTitleValue:{
        flex:2,
        fontSize:'10@s',
    },
    rowBack: {
		alignItems: 'center',
		backgroundColor: '#DDD',
		flex: 1,
		flexDirection: 'row',
		paddingLeft: '15@s',
    },
    hiddenButtonMainContainer: {
        backgroundColor:'#fff',
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: '150@s',
        right:0
    },
    hiddenButtonRowDivider:{
        flexDirection:'row'
        ,flex:1
        , justifyContent:'space-between'
    },
    hiddenButton:{
        width:'75@s'
        ,alignItems:'center'
        ,justifyContent:'center'
    },
    hiddenButtonIcon:{
        color:colors.White
    },
    hiddenButtonText:{
        color:defaultColor.White
        ,textAlign:'center'
        ,fontSize:'10@s'
    },
    swipeIcon:{
        color:colors.Grey_Light
    }

    
})