import {realm, DbService } from "./db";

export class UserDb extends DbService{
    constructor(){
        super("user")
    }

    getAll(sortBy){
        if(!sortBy)
            sortBy = [['agentCode',false]]
        return super.getAll(sortBy)
    }
}