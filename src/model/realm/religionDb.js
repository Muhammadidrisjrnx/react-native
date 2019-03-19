import {realm, DbService } from "./db";

export class ReligionDb extends DbService{
    constructor(){
        super("religion")
    }
}