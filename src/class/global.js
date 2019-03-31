export const BASE_URL = 'http://173.212.215.75:8080/irecruit/api/'

export const HEADER = STD_HEADER =(tkn) => {
    return {
        'Authorization': 'Bearer ' + tkn,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

export const MULTIPART_HEADER = (tkn) => {
    return {
        'Authorization': 'Bearer ' + tkn,
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
    }
}

export const AUTH_ONLY_HEADER = (tkn) =>{
    return{
        'Authorization':'Bearer '+ tkn
    }
}