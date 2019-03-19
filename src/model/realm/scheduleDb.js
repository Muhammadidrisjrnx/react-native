import {realm, DbService } from "./db";

export class StatusDb extends DbService{
    constructor(){
        super("schedule")
    }
}