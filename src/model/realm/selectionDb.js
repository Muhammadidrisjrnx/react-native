import {realm, DbService } from "./db";

export class SelectionDb extends DbService{
    constructor(){
        super("selection")
    }
}