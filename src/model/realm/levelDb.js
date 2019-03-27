import {realm, DbService } from "./db";

export class LevelDb extends DbService{
    constructor(){
        super("level")
    }
}

export const levelDb = new LevelDb()