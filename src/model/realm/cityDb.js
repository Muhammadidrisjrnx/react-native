import {realm, DbService } from "./db";

export class CityDb extends DbService{
    constructor(){
        super("city")
    }
}

export const citiDb = new CityDb()