import {realm, DbService } from "./db";

export class BankDb extends DbService{
    constructor(){
        super("bank")
    }
}

export const bankDb = new BankDb()