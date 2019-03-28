import {realm, DbService } from "./db";

export class AgentDetailSelectionDb extends DbService{
    constructor(){
        super("agentDetailSelection");
    }

    update = (agentId, data) => {
        var obj = realm
            .objects(this.schema)
            .filtered('id =' + this.state.input_user_id);

        if (obj.length > 0) {
            for (let i = 0; i < obj.length; i++) {
                const element = obj[i];
                
            }
        }
    }
}