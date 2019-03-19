import {realm, DbService } from "./db";

export class OccupationDb extends DbService{
    constructor(){
        super("occupation")
    }
}