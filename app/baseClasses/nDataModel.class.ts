import { login } from '../src/app/models/login.model';
import { event } from '../src/app/models/event.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
login: login;
event: event;
//DECLARE NEW VARIABLE

constructor() {
this.login = new login();
this.event = new event();
//CREATE NEW DM INSTANCE
    }
}
