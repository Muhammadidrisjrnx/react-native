import {BASE_URL,HEADER} from '../class/global.js'

export const getNews = (tkn) => {
    const URL = BASE_URL+'contents'
    return fetch(URL,{
        method: 'GET',
        headers: HEADER(tkn),
    }).then((res) => res.json());
}