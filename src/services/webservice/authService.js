import {BASE_URL, HEADER} from '../../class/global.js'

export const authToken = (username,password) => {
    //const URL = BASE_URL+'authenticate'
    const URL = BASE_URL+'login'
    data = {
        'username':username,
        'password':password,
        'rememberMe':true
    }
    return fetch(URL,{
        method: 'POST',
        headers: HEADER('asw'),
        body: JSON.stringify(data)
    }).then((res) => res.json());
}

export const getDetailUser = (tkn,code) =>{
    const URL = BASE_URL+'rest/agents/structure?login='+code
    
    return fetch(URL,{
        method: 'GET',
        headers:HEADER(tkn),
    }).then((res)=>res.json())
}

export const postBranches = (tkn,data) => {
    const URL = BASE_URL+'branches'
    return fetch(URL,{
        method: 'POST',
        headers: HEADER(tkn),
        body: JSON.stringify(data)
    }).then((res) => res.json());
}

export const deleteBranches = (tkn,id) =>{
    const URL = BASE_URL+'branches/'+id
    return fetch(URL,{
        method: 'DELETE',
        headers: HEADER(tkn)
    }).then((res) => res.json());
}