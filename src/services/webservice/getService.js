import {BASE_URL,HEADER,MULTIPART_HEADER} from '../../class/global.js'

export const getAllService = (tkn,getWhat) => {
    const URL = BASE_URL+getWhat
    return fetch(URL,{
        method: 'GET',
        headers: HEADER(tkn),
    }).then((res) => res.json())
    .catch((error) => {
        console.warn('erorr : ' + JSON.stringify(error))
    });
}