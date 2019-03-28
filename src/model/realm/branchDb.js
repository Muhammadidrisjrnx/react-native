import {realm, DbService } from "./db";

export class BranchDb extends DbService{
    constructor(){
        super("branch")
    }

    getByCode(code){
        return realm.objects("branch").filtered('brcCode == $0',code)[0]
    }
}

export const branchDb = new BranchDb()