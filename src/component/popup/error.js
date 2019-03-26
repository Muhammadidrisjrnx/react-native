import {Alert} from 'react-native';


export const popUpError = (title,content) =>{
    Alert.alert(
        title,
        content,
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
}