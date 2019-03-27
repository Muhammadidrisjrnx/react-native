import {realm, DbService } from "./db";

export class BranchDb extends DbService{
    constructor(){
        super("branch")
    }
}

export const branchDb = new BranchDb()