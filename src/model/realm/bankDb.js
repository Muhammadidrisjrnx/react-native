import {realm, DbService } from "./db";

export class BankDb extends DbService{
    constructor(){
        super("bank")
    }
}