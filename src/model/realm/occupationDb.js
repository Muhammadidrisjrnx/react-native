import {realm, DbService } from "./db";

export class OccupationDb extends DbService{
    constructor(){
        super("occupation")
    }
}

export const occupationDb = new OccupationDb()