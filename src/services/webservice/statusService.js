import {BASE_URL, HEADER} from '../../class/global.js'
import deepDiffer from 'react-native/lib/deepDiffer'

export const getStatus = (tkn,id) => {
    const URL = BASE_URL+'statuses/'+id
    return fetch(URL,{
        method: 'GET',
        headers: HEADER(tkn),
    }).then((res) => res.json())
    .catch((error) => {
        console.warn('erorr : ' + JSON.stringify(error))
    });
}
