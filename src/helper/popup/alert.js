import {Alert} from 'react-native';


export const popUp = (title,content) =>{
    Alert.alert(
        title,
        content,
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
}

export const popUpConfirmation = (title,content,yesAction) =>{
  Alert.alert(
    title,
    content,
    [
      {text:'Ya', onPress:yesAction},
      {text:'Tidak',onPress:()=>console.log('No Pressed')}
    ]
  )
}

export const popUpError = popUp;