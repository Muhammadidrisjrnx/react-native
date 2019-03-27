import {realm, DbService } from "./db";

export class EducationDb extends DbService{
    constructor(){
        super("education")
    }
}

export const educationDb = new EducationDb()