import {realm, DbService } from "./db";

export class BranchDb extends DbService{
    constructor(){
        super("branch")
    }
}