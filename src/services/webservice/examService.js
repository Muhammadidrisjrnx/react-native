import {BASE_URL, HEADER} from '../../class/global.js'
import deepDiffer from 'react-native/lib/deepDiffer'
import moment from 'moment'

export const postExam = (tkn,data) => {
    const URL = BASE_URL+'agent-detail-exams'

    console.warn('post exam data '+JSON.stringify(data))

    console.warn("benar : "+JSON.stringify(deepDiffer("data","data")))
    console.warn("salah: :"+JSON.stringify(deepDiffer("data","dta")))
    console.warn("data : "+deepDiffer(data,exData))

    return fetch(URL,{
        method: 'POST',
        headers: HEADER(tkn),
        body: JSON.stringify(data)
    }).then((res) => res.json());
}

export const getExam = (tkn,id) => {
    const URL = BASE_URL+'exams/'+id
    return fetch(URL,{
        method: 'GET',
        headers: HEADER(tkn),
    }).then((res) => res.json())
    .catch((error) => {
        console.warn('error : ' + JSON.stringify(error))
    });
}

export const getExams = (tkn,page) =>{
    //var date7 = new Date();
    //date7.setDate(date7.getDate() + 7);
    var date7 = moment().add(7,"days").format('YYYY-MM-DD')

    const URL = BASE_URL+'exams?sort=exmDate&page='+page+'&exmDate.greaterOrEqualThan='+date7

    console.warn('get exams date : '+URL)

    return fetch(URL,{
        method: 'GET',
        headers: HEADER(tkn),
    }).then((res) => res.json())
    .catch((error) => {
        console.warn('error : ' + JSON.stringify(error))
    });
}

export const getAgentDetailExam = (tkn) =>{
    const URL = BASE_URL+'agent-detail-exams'
    return fetch(URL,{
        method: 'GET',
        headers: HEADER(tkn)
    }).then((res)=>res.json())
    .catch((error)=>{
        console.warn('error : '+ JSON.stringify(error))
    });
}

const exData = {
    "egtexmConfirmationStatus":"0",
    "agent": {
      "id": 4253,
      "agtVersion": 0,
      "agtCreatedDate": "2019-03-19T11:57:08.637Z",
      "agtCreateBy": "68000035",
      "agtUpdateDate": null,
      "agtUpdateBy": null,
      "agtCode": null,
      "agtName": "TEST DH",
      "agtPob": "MALANG",
      "agtJoinDate": null,
      "agtDob": "1988-03-10",
      "agtSex": "F",
      "agtAddr1": "SAWOJAJAR 1",
      "agtAddr2": "SAWOJAJAR",
      "agtAddr3": null,
      "agtDistrict": "KEDUNGKANDANG",
      "agtIdCardNo": "35091625355558697",
      "agtMaritalStatus": "S",
      "agtMobileNumber": "8539535835485",
      "agtEmail": "DH@GMAIL.COM",
      "agtDependentTotal": 0,
      "agtExInsuranceCompany": null,
      "agtExInsuranceResignDate": null,
      "agtExAajiExpired": null,
      "agtAajiNo": null,
      "agtBankAccountNo": "62738937348",
      "agtBankAccountName": "DHEA ARMALIVIA",
      "agtTaxId": null,
      "agtRecruitType": "FC",
      "agtRecruitId": "68000035",
      "agtRecruitRelation": null,
      "agtLeaderType": "BM",
      "agtLeaderId": "68000034",
      "agtApproval1": false,
      "agtApproval2": null,
      "agtSubmitted": true,
      "agtStatus": null,
      "agtqrCode": null,
      "agtInsuranceExp": null,
      "agtLeaderExp": null,
      "agtCommissionIncome": null,
      "agtORIncome": null,
      "branch": {
          "id": 1651,
          "brcVersion": 2,
          "brcUpdateDate": "2019-02-15T02:36:47.540Z",
          "brcUpdateBy": "admin",
          "brcActive": true,
          "brcCode": null,
          "brcName": "Branch 1",
          "brcDesc": null,
          "brcAddr1": null,
          "brcAddr2": null,
          "brcAddr3": null,
          "brcDistrict": null,
          "brcCity": "Jakarta",
          "brcPIC": null,
          "brcContactNo": null,
          "brcLat": null,
          "brcLong": null
      },
      "religion": {
          "id": 1551,
          "reliVersion": 1,
          "reliUpdateDate": "2018-12-12T10:05:00Z",
          "reliUpdateBy": "admin",
          "reliActive": true,
          "reliName": "ISLAM"
      },
      "education": {
          "id": 1608,
          "eduVersion": 0,
          "eduUpdateDate": "2018-12-12T10:08:07.423Z",
          "eduUpdateBy": "admin",
          "eduActive": true,
          "eduName": "S1"
      },
      "occupation": {
          "id": 2152,
          "ocuVersion": 0,
          "ocuUpdateDate": "2019-03-18T10:32:00Z",
          "ocuUpdateBy": null,
          "ocuActive": true,
          "ocuName": "NON INSURANCE"
      },
      "bank": {
          "id": 2353,
          "bnkVersion": 0,
          "bnkUpdateDate": "2019-03-18T11:27:00Z",
          "bnkUpdateBy": "admin",
          "bnkActive": true,
          "bnkName": "BNI"
      },
      "level": {
          "id": 1701,
          "lvlVersion": 0,
          "lvlUpdateDate": "2018-12-12T10:15:40.630Z",
          "lvlUpdateBy": "admin",
          "lvlActive": true,
          "lvlName": "FC"
      },
      "status": {
          "id": 2356,
          "statVersion": 0,
          "statUpdateDate": "2018-12-13T23:07:14.993Z",
          "statUpdateBy": "admin",
          "statActive": true,
          "statName": "Approval Request",
          "statDesc": null,
          "statIsShown": null
      },
      "city": {
          "id": 13243,
          "cityVersion": 0,
          "cityUpdateDate": null,
          "cityUpdateBy": null,
          "cityActive": true,
          "cityName": "MALANG",
          "cityDesc": null
      }
  }
    ,
    "exam": {
          "id": 2917,
          "exmVersion": 0,
          "exmCreatedDate": "2019-03-19T02:53:51.893Z",
          "exmCreatedBy": "admincs",
          "exmUpdateDate": null,
          "exmUpdateBy": null,
          "exmCity": "JAKARTA",
          "exmLocation": "ONLINE EXAM CENTER AAJI - RUMAH AAJI",
          "exmDate": "2019-03-28",
          "exmType": "ONLINE"
      }
  }