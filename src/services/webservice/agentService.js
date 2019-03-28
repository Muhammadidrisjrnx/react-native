import {BASE_URL,HEADER,MULTIPART_HEADER} from '../../class/global.js'
import { getAllService } from './getService.js';
import {Platform} from 'react-native'

export const getAgents = (tkn) => {
    const URL = BASE_URL+'rest/agents/lead-list'
    return fetch(URL,{
        method: 'GET',
        headers: HEADER(tkn),
    }).then((res) => res.json())
    .catch((error) => {
        console.warn('erorr : ' + JSON.stringify(error))
    });
}


export const getAgent = (tkn,id) => {
    const URL = BASE_URL+'agents/'+id
    return fetch(URL,{
        method: 'GET',
        headers: HEADER(tkn),
    }).then((res) => res.json())
    .catch((error) => {
        console.warn('erorr : ' + JSON.stringify(error))
    });
}

export const getApprovalAgents = (tkn) => {
    const URL = BASE_URL+'rest/agents/approval-list'
    return fetch(URL,{
        method: 'GET',
        headers: HEADER(tkn),
    }).then((res) => res.json())
    .catch((error) => {
        console.warn('erorr : ' + JSON.stringify(error))
    });
}

export const filterGetAgentByCode = (data,code) => {
    res =  data.filter((item)=>{
        return item.agtCreateBy === code
    })

    return res
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

export const updateAgent = (tkn,data) => {
    const URL = BASE_URL+'agents'    
    
    data = JSON.stringify(data)
    console.warn("URL : "+URL+"\nDATA : "+data)

    return fetch(URL,{
        method: 'PUT',
        headers: HEADER(tkn),
        body: data
    }).then((res) => res.json())
    .catch((error) => {
        console.warn('erorr : ' + JSON.stringify(error))
    })
}

export const deleteAgent = (tkn,id) => {
    const URL = BASE_URL+'agents/'+id
    console.warn(URL)
    return fetch(URL,{
        method: 'DELETE',
        headers:  {
            'Authorization': 'Bearer ' + tkn,
        }
    }).then((res) => res.json())
    .catch((error) => {
        console.warn('erorr : ' + JSON.stringify(error))
    });
}

export const updateAgentFiles = (tkn,id,data,lead) =>{

    //const URL = BASE_URL+'rest/agents/updateLead/'+id
    const URL = BASE_URL+'rest/agents/saveLead'
    delete lead.id
    delete lead.agtVersion
    delete lead.agtCreateBy
    delete lead.agtCreatedDate
    delete lead.agtUpdateBy
    delete lead.agtUpdateDate
    
    console.warn('lead'+JSON.stringify(lead))

    //lead.agtName = lead.agtName+" DUP"
    formdata = new FormData()
    formdata.append('agent',JSON.stringify(lead))

    //Barbaric v.1
    if(data.fileKtp){
        formdata.append('files',{
            name: "0"+data.fileKtp.fileName,
            type: data.fileKtp.type,
            uri: //data.fileKtp.uri
            Platform.OS === "android" ? data.fileKtp.uri : data.fileKtp.uri.replace("file://", "")
        })
    }

    if(data.fileFoto){
        formdata.append('files',{
            name: "1"+data.fileFoto.fileName,
            type: data.fileFoto.type,
            uri:
            Platform.OS === "android" ? data.fileFoto.uri : data.fileFoto.uri.replace("file://", "")
        })
    }

    if(data.fileBukuRek){
        formdata.append('files',{
            name: "2"+data.fileBukuRek.fileName,
            type: data.fileBukuRek.type,
            uri:
            Platform.OS === "android" ? data.fileBukuRek.uri : data.fileBukuRek.uri.replace("file://", "")
        })
    }

    if(data.fileKk){
        formdata.append('files',{
            name: "3"+data.fileKk.fileName,
            type: data.fileKk.type,
            uri:
            Platform.OS === "android" ? data.fileKk.uri : data.fileKk.uri.replace("file://", "")
        })
    }

    if(data.fileFormAaji){
        formdata.append('files',{
            name: "4"+data.fileFormAaji.fileName,
            type: data.fileFormAaji.type,
            uri:
            Platform.OS === "android" ? data.fileFormAaji.uri : data.fileFormAaji.uri.replace("file://", "")
        })
    }

    if(data.fileBukti){
        formdata.append('files',{
            name: "5"+data.fileBukti.fileName,
            type: data.fileBukti.type,
            uri:
            Platform.OS === "android" ? data.fileBukti.uri : data.fileBukti.uri.replace("file://", "")
        })
    }

    if(data.fileNpwp){
        formdata.append('files',{
            name: "6"+data.fileNpwp.fileName,
            type: data.fileNpwp.type,
            uri:
            Platform.OS === "android" ? data.fileNpwp.uri : data.fileNpwp.uri.replace("file://", "")
        })
    }




    /*if(data.fileKtp){
        //data.fileKtp.fileName = '0'+data.fileKtp.fileName

        console.warn('file name '+data.fileKtp.fileName)
        formdata.append("fileKtp", {
            name: "0"+data.fileKtp.fileName,
            type: data.fileKtp.type,
            uri: //data.fileKtp.uri
                Platform.OS === "android" ? data.fileKtp.uri : data.fileKtp.uri.replace("file://", "")
            });

    }*/

    console.warn("form data : "+JSON.stringify(formdata))

    //let URLI= 'http://10.0.2.2/api/upload'
    //return fetch(URLI,{
    return fetch(URL,{
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + tkn,
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            //'Content-Type':'application/x-www-form-urlencoded'
        },
        body: formdata
    }).then((res) => res.json())
    .catch((error) => {
        console.warn('erorr : ' + JSON.stringify(error))
    })

    /*
    
    if(data['fileBukuRek']){
        data['fileBukuRek'].fileName = '2'+data['fileBukuRek'].fileName
    }
    if(data['fileKk']){
        data['fileKk'].fileName = '3'+data['fileKk'].fileName
    }
    if(data['fileFormAaji']){
        data['fileFormAaji'].fileName = '4'+data['fileFormAaji'].fileName
    }
    if(data['fileBukti']){
        data['fileBukti'].fileName = '5'+data['fileBukti'].fileName
    }
    if(data['fileNpwp']){
        data['fileNpwp'].fileName = '6'+data['fileNpwp'].fileName
    }*/

}

export const getAgentSelection = (tkn,id) => {
    const URL = BASE_URL+`agent-detail-selections?agentId.in=${String(id)}`;

    return fetch(URL,{
        method: 'GET',
        headers: HEADER(tkn),
    }).then((res) => res.json())
    .catch((error) => {
        console.warn('erorr : ' + JSON.stringify(error))
    });
}

export const createAgentSelection = (tkn,data) => {
    const URL = BASE_URL+'rest/agent-detail-selections/create';
    
    console.warn('URL:'+URL+'\ntkn : '+tkn+"\nformdata : "+JSON.stringify(data));

    return fetch(URL,{
        method: 'POST',
        headers: HEADER(tkn),
        body: JSON.stringify(data)
    }).then((res) => res.json()
    )
    .catch((error) => {
        console.warn('erorr : ' + JSON.stringify(error))
    })
}