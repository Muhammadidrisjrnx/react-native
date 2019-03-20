import {realm, DbService } from "./db";

export class StatusDb extends DbService{
    constructor(){
        super("status")
    }
}

export let statusDb = new StatusDb()