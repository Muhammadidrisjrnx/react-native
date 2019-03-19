import Realm from 'realm';

const schemaLevel = {
    name: 'level',
    primaryKey: 'id',
    properties: {
        id: {type: 'int', indexed: true},
        lvlVersion:'int?',
        lvlUpdateDate:'string?',
        lvlUpdateBy:'string?',
        lvlActive:'bool?',
        lvlName:'string?'
    }
}

const schemaBranch = {
    name: 'branch',
    primaryKey: 'id',
    properties: {
        id: {type: 'int', indexed: true},
        brcVersion:'int?',
        brcUpdateDate:'string?',
        brcUpdateBy:'string?',
        brcActive:'bool?',
        brcCode:'string?',
        brcName:'string?',
        brcDesc:'string?',
        brcAddr1:'string?',
        brcAddr2:'string?',
        brcAddr3:'string?',
        brcDistrict:'string?',
        brcCity:'string?',
        brcPIC:'string?',
        brcContactNo:'string?',
        brcLat:'double?',
        brcLong:'double?'
    }
}

const schemaCity = {
    name: 'city',
    primaryKey: 'id',
    properties: {
        id: {type: 'int', indexed: true},
        cityVersion: 'int?',
        cityUpdateDate: 'string?',
        cityUpdateBy: 'string?',
        cityActive: 'bool?',
        cityName: 'string?',
        cityDesc: 'string?'
    }
}

const schemaReligion = {
    name: 'religion',
    primaryKey: 'id',
    properties: {
        id: {type: 'int', indexed: true},
        reliVersion: 'int?',
        reliUpdateDate: 'string?',
        reliUpdateBy: 'string?',
        reliActive: 'bool?',
        reliName: 'string?'
    }
}

const schemaEducation = {
    name: 'education',
    primaryKey: 'id',
    properties: {
        id: {type: 'int', indexed: true},
        eduVersion: 'int?',
        eduUpdateDate: 'string?',
        eduUpdateBy: 'string?',
        eduActive: 'bool?',
        eduName: 'string?'
    }
}

const schemaOccupation = {
    name: 'occupation',
    primaryKey: 'id',
    properties: {
        id: {type: 'int', indexed: true},
        ocuVersion: 'int?',
        ocuUpdateDate: 'string?',
        ocuUpdateBy: 'string?',
        ocuActive: 'bool?',
        ocuName: 'string?'
    }
}

const schemaStatus = {
    name: 'status',
    primaryKey: 'id',
    properties: {
        id: {type: 'int', indexed: true},
        statVersion: 'int?',
        statUpdateDate: 'string?',
        statUpdateBy: 'string?',
        statActive: 'bool?',
        statName: 'string?',
        statDesc: 'string?'
    }
}

const schemaBank = {
    name: 'bank',
    primaryKey: 'id',
    properties: {
        id: {type: 'int', indexed: true},
        bnkVersion: 'int?',
        bnkUpdateDate: 'string?',
        bnkUpdateBy: 'string?',
        bnkActive: 'bool?',
        bnkName: 'string?'
    }
}

const schemaUser = {
    name: 'user',
    primaryKey: 'agentCode',
    properties:{
        username:{type:'string',indexed:true},
        password:'string',
        name:'string',
        level:'string',
        agentCode:'string',
        directLeaderLevel:'string?',
        directLeaderName:'string?',
        directLeaderCode:'string?'
    }
}

/*
    "id": 1451,
    "exmVersion": 0,
    "exmCreatedDate": "2019-03-14T10:18:35.023Z",
    "exmCreatedBy": "admincs",
    "exmUpdateDate": "2019-03-14T10:18:35.040Z",
    "exmUpdateBy": "admincs",
    "exmCity": "BANDUNG",
    "exmLocation": "SEKOLAH TINGGI MANAJEMEN INFORMATIKA & KOMPUTER (STMIK) BANDUNG",
    "exmDate": "2019-02-03",
    "exmType": "ONLINE"
*/

const schemaAajiSchedule = {
    name: 'aaji',
    primaryKey: 'id',
    properties:{
        id:'int',
        exmLocation:'string',
        exmType:'string?',
        exmCity:{type:'string',indexed:true},
        day:'string',
        month:'string',
        year:'string'
    }
}

const schemaUserAaji = {
    name: 'useraaji',
    primaryKey: 'id',
    properties:{
        id:'int',
        name:'string',
        date:'string',
        location:'string',
        city:'string'
    }
}

const schemaAppointment = {
    name: 'appointment',
    primaryKey: 'id',
    properties:{
        id:'int',
        name:'string',
        email:'string?',
        phone:'string?',
        date:{type:'string',indexed:true},
        time:'string'
    }
}


export let realm = new Realm({
    schema: [
        schemaLevel,
        schemaBranch,
        schemaCity,
        schemaReligion,
        schemaEducation,
        schemaOccupation,
        schemaStatus,
        schemaBank,
        schemaUser,
        schemaAajiSchedule,
        schemaUserAaji,
        schemaAppointment
    ],
    schemaVersion:0
});

export class DbService  {
    
    constructor(schema){
        this.schema = schema;
    }

    getAll (sortBy){
        if (!sortBy) sortBy = [['id', false]]
        return realm.objects(this.schema).sorted(sortBy)
    }
    get (id){
        return realm.objectForPrimaryKey(this.schema,id)
    }
    
    insert (data) {
        realm.write(() => {
            realm.create(this.schema, data)
        })
    }
    
    insertAll (data){
        for(i=0;i<data.length;i++){
            this.insert(data[i])
        }
    }
    
    delete (data){
        realm.write(() => {
            realm.delete(data)
        })
    }
    
    deleteAll(){
        realm.write (()=>{
            realm.delete(realm.objects(this.schema))
        })
    }
}