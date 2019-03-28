import {realm, DbService } from "./db";

//USELESS
export class ExamDb extends DbService{
    constructor(){
        super("exam")
    }
    
    getAll (){
        var date = new Date();
        date.setDate(date.getDate() + 7);

        sortBy = [['exmDate', false]]
        return realm.objects(this.schema)
        .filtered("exmDate >= $0", date)
        .sorted(sortBy)
    }
}