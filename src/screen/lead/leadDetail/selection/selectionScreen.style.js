import {ScaledSheet} from 'react-native-size-matters';

import {colors} from '../../../../helper/style/defaultStyle.js';

export const defaultColor = colors;

 export default ScaledSheet.create({
    flatlist:{
        backgroundColor:'transparent'
    },
     selection_accordionHeader:{
        height:'60@vs',
        padding:'10@s',
        backgroundColor:colors.White,
        borderBottomWidth:'1@s',
        borderBottomColor:colors.Red_Alt1
     },
     selection_accordionHeaderTitleContainer:{
        flex:1,
        flexDirection:'row'
     },
     selection_accordionHeaderTitle:{
         fontSize:'15@s',
         color:colors.Red
     },
     selection_accordionContentContainer:{
        borderBottomWidth:'1@s',
        borderBottomColor:colors.Red_Alt2,
        backgroundColor:colors.White,
     },
     selection_accordionContentText:{
        fontSize:'15@s',
        paddingHorizontal:'10@s',
        paddingVertical:'5@s'
     }
 })