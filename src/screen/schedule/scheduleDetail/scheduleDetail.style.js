import{ScaledSheet} from 'react-native-size-matters';

import {colors} from '../../../helper/style/defaultStyle.js'

export const defaultColor = colors;

export default ScaledSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius:10,
    padding:10,
    margin:20,
    marginTop:10,
    flexDirection:'column'
  },
  header:{
    borderBottomColor:colors.Grey,
    borderBottomWidth:1,
    padding:10
  },
  flatlist:{
    backgroundColor:'transparent'
  },
  titleContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  title:{
      color:colors.Grey
  },  
})