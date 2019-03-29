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

export const popUpError = popUp;