export const requiredValidator = (data) => {
    if(data){
        return true
    }else return false
}

export const lengthValidator = (data, min,max) =>{
    req = requiredValidator(data)
    if(req)
        return (data.length<=max && data.length>=min)
    else 
        return req
}

export const numericValidator = (data) =>{
    return /^\d+$/.test(data);
}

export const phoneValidator = (data) =>{
    return lengthValidator(data,8,15) && numericValidator(data)
}

export const ktpValidator = (data) =>{
    return lengthValidator(data,1,20) && numericValidator(data)
}

export const npwpValidator = (data) => {
    if(data){
        return lengthValidator(data,1,20) && numericValidator(data)
    }else return true
}

export const rekeningValidator = (data)  => {
    return lengthValidator(data,1,20) && numericValidator(data)
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

export const dependentHasValueValidator = (data,dependent,value) => {
    if(dependent===value)
        return requiredValidator(data)
    else return true
}

export const requiredInsuranceValidator = (data,dependent) =>{
    if(requiredValidator(dependent))
        return dependentHasValueValidator(data,dependent.ocuName,"INSURANCE")
    else
        return true;
}

export const jpgValidator = (data) =>{
    if(requiredValidator(data))
        return data.type==='image/jpeg'
    else
        return false
}

export const maxFileValidator = (data) =>{
    if(requiredValidator(data))
        return data.fileSize<=500000
    else 
        return false
}

export const docValidator = (data, mandatory) => {
    return (requiredValidator(data) && jpgValidator(data) && maxFileValidator(data))
}

export const informationValidator = (data) => {
    return(
        requiredValidator(data.level)
        && requiredValidator(data.branch)
        && lengthValidator(data.agtName,1,50)
        && lengthValidator(data.agtPob,1,20)
        && requiredValidator(data.agtDob)
        && requiredValidator(data.agtSex)
        && lengthValidator(data.agtAddr1,1,30)
        && lengthValidator(data.agtAddr2,1,30)
        && lengthValidator(data.agtDistrict,1,30)
        && requiredValidator(data.city)
        && requiredValidator(data.religion)
        && ktpValidator(data.agtIdCardNo)
        && requiredValidator(data.education)
        && requiredValidator(data.agtMaritalStatus)
        && requiredValidator(data.agtDependentTotal)
        && phoneValidator(data.agtMobileNumber)
        && emailValidator(data.agtEmail)   
    )
}


export const experienceBankingValidator = (data) => {
    return (
        requiredValidator(data.bank)
        && lengthValidator(data.agtBankAccountName,1,60)
        && rekeningValidator(data.agtBankAccountNo)
        && npwpValidator(data.agtTaxId)
        && requiredValidator(data.occupation)
        && requiredInsuranceValidator(data.agtExInsuranceCompany,data.occupation)
        && requiredInsuranceValidator(data.agtLeaderExp,data.occupation)
        && requiredInsuranceValidator(data.agtORIncome,data.occupation)
    )
}

// npwp & kk

export const documentValidator=(data)=>{
    return(
        docValidator(data.fileKtp)
        && docValidator(data.fileFoto)
        && docValidator(data.fileFormAaji)
        && docValidator(data.fileBukuRek)
        && docValidator(data.fileBukti)
    )
}