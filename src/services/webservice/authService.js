import {BASE_URL, HEADER} from '../../class/global.js'

export const authToken = (username,password) => {
    const URL = BASE_URL+'authenticate'
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

export const agentLogin = () => {
    const URL = 'https://dev-gsmile.generali.co.id/mdw/api/auth/agent/login'
    data = {
        "username": "68000033",
        "password": "19820830"
    }
    return fetch(URL,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
    }).then((res) => res.json());
}