import { statusApproval, statusSubmitted} from '../helper/status.js';

export const checkApproval = (user,agent) => {
    agentLevel = agent.level.lvlName
    agent.agtApproval1 = false
    agent.status = statusApproval
    if(user.usrRoles==='FC'){
        switch(agentLevel){
            case 'FC': //NEED APPROVAL BM
                agent.agtLeaderId=user.usrBm
                agent.agtLeaderType="BM"
            break;
            case 'BM': //NEED APPROVAL ABD
                agent.agtLeaderId=user.usrAd
                agent.agtLeaderType="ABD"
            break;
            case 'ABD': //NEED APPROVAL BD
                agent.agtLeaderId=user.usrBd
                agent.agtLeaderType="BD"
            break;
            default: 
                agent.agtLeaderId=null
            break;
        }
    }else if(user.usrRoles==='BM'){
        switch(agentLevel){
            case 'FC': //APPROVED
                agent.agtApproval1 = true
                agent.status = statusSubmitted
                agent.agtLeaderId=user.usrAgentCode
                agent.agtLeaderType=user.usrRoles
            break;
            case 'BM':  //NEED APPROVAL ABD
                agent.agtLeaderId=user.usrAd
                agent.agtLeaderType="ABD"
            break;
            case 'ABD': //NEED APPROVAL BD
                agent.agtLeaderId=user.usrBd
                agent.agtLeaderType="BD"
            break;
            default: //BD
                agent.agtLeaderId=null
            break;
        }
    }else if(user.usrRoles==='ABD'){
        switch(agentLevel){
            case 'FC': //APPROVED
                agent.agtApproval1 = true
                agent.status = statusSubmitted
                agent.agtLeaderId=user.usrAgentCode
                agent.agtLeaderType=user.usrRoles
            break;
            case 'BM':  //APPROVED
                agent.agtApproval1 = true
                agent.status = statusSubmitted
                agent.agtLeaderId=user.usrAgentCode
                agent.agtLeaderType=user.usrRoles
            break;
            case 'ABD': //NEED APPROVAL BD
                agent.agtLeaderId=user.usrBd
                agent.agtLeaderType="BD"
            break;
            default: //BD
                agent.agtLeaderId=null
            break;
        }
    }else if(user.usrRoles==='BD'){
        switch(agentLevel){
            case 'FC': //APPROVED
                agent.agtApproval1 = true
                agent.status = statusSubmitted
                agent.agtLeaderId=user.usrAgentCode
                agent.agtLeaderType=user.usrRoles
            break;
            case 'BM':  //APPROVED
                agent.agtApproval1 = true
                agent.status = statusSubmitted
                agent.agtLeaderId=user.usrAgentCode
                agent.agtLeaderType=user.usrRoles
            break;
            case 'ABD': //APPROVED
                agent.agtApproval1 = true
                agent.status = statusSubmitted
                agent.agtLeaderId=user.usrAgentCode
                agent.agtLeaderType=user.usrRoles
            break;
            default: //BD
                agent.agtLeaderId=null
            break;
        }
    }
    return agent
  }

  export const capitalize=(data) => {
    //personal
    data.agtName = data.agtName ? data.agtName.toUpperCase() : ''
    data.agtPob = data.agtPob? data.agtPob.toUpperCase() : ''
    data.agtAddr1 = data.agtAddr1? data.agtAddr1.toUpperCase() : ''
    data.agtAddr2 = data.agtAddr2? data.agtAddr2.toUpperCase() : ''
    data.agtDistrict = data.agtDistrict? data.agtDistrict.toUpperCase() : ''
    data.agtIdCardNo = data.agtIdCardNo? data.agtIdCardNo.toUpperCase() : ''
    data.agtEmail = data.agtEmail? data.agtEmail.toUpperCase(): ''

    //experience&banking
    data.agtExInsuranceCompany = data.agtExInsuranceCompany? data.agtExInsuranceCompany.toUpperCase():''
    data.agtAajiNo = data.agtAajiNo? data.agtAajiNo.toUpperCase():''
    data.agtBankAccountName = data.agtBankAccountName? data.agtBankAccountName.toUpperCase():''

    //recruit
    data.agtRecruitRelation = data.agtRecruitRelation? data.agtRecruitRelation.toUpperCase():''

    return data
  }

  export const numberToString = (num) =>{
    result = ""
    if(num) result=result+num
    return result
  }
