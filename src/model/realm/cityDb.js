import {realm, DbService } from "./db";

export class CityDb extends DbService{
    constructor(){
        super("city")
    }
}