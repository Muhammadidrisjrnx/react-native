import {realm, DbService } from "./db";

export class AgentDb extends DbService{
    constructor(){
        super("agent")
    }

    getAll(sortBy){
        if(!sortBy)
            sortBy = [['id',false]]
        return super.getAll(sortBy)
    }

    get (id){
        let data = super.get(id)
        return this.parse(data);
    }

    insert(data){
        super.insert(this.stringify(data))
    }

    update(data){
        super.update(this.stringify(data))
    }

    delete(id){
        super.delete(super.get(id))
    }

    stringify(data){
        data.bank = JSON.stringify(data.bank)
        data.level = JSON.stringify(data.level)
        data.branch = JSON.stringify(data.branch)
        data.status = JSON.stringify(data.status)
        data.city = JSON.stringify(data.city)
        data.education = JSON.stringify(data.education)
        data.religion = JSON.stringify(data.religion)
        data.occupation = JSON.stringify(data.occupation)
        return data
    }

    parse(data){
        data.bank = JSON.parse(data.bank)
        data.level = JSON.parse(data.level)
        data.branch = JSON.parse(data.branch)
        data.status = JSON.parse(data.status)
        data.city = JSON.parse(data.city)
        data.education = JSON.parse(data.education)
        data.religion = JSON.parse(data.religion)
        data.occupation = JSON.parse(data.occupation)
        return data
    }

}

export const agentDb = new AgentDb()