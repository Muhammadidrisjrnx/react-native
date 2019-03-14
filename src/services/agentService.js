import {BASE_URL,HEADER,MULTIPART_HEADER} from '../class/global.js'

export const getAgents = (tkn) => {
    const URL = BASE_URL+'agents'
    return fetch(URL,{
        method: 'GET',
        headers: HEADER(tkn),
    }).then((res) => res.json())
    .catch((error) => {
        console.warn('erorr : ' + JSON.stringify(error))
    });
}

export const newAgent = (tkn,data) => {
    const URL = BASE_URL+'rest/agents/saveAgent'
    
    formdata = new FormData()
    formdata.append('agent',JSON.stringify(data))
    
    console.warn('URL:'+URL+'\ntkn : '+tkn+"\nformdata : "+JSON.stringify(formdata))

    return fetch(URL,{
        method: 'POST',
        headers: MULTIPART_HEADER(tkn),
        body: formdata
    }).then((res) => res.json())
    .catch((error) => {
        console.warn('erorr : ' + JSON.stringify(error))
    })
}