import {AsyncStorage} from 'react-native';

export default class Conn {
    async connectAPI(url, reqInit) {
        try {
            let response = await fetch(url,reqInit)
            let responseJson = await response.json();
            return responseJson;
            } catch (error) {
            console.error(error);
        }
    }
}


