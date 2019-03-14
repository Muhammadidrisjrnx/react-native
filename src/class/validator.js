export const requiredValidator = (data) => {
    if(data){
        return true
    }else return false
}

export const lengthValidator = (data, min,max) =>{
    return (data.length<max && data.length>min)
}

export const phoneValidator = (data) =>{
    return lengthValidator(data,8,15)
}

export const emailValidator = (data) => {
    const expression = /\S+@\S+/
    return expression.test(String(data).toLowerCase())
}

export const newValidator = (data) => {
       return (
           requiredValidator(data.agtName)
            && phoneValidator(data.agtMobileNumber)
            && emailValidator(data.agtEmail)
       )
}