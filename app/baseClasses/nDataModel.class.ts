import { login } from '../src/app/models/login.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
login: login;
//DECLARE NEW VARIABLE

constructor() {
this.login = new login();
//CREATE NEW DM INSTANCE
    }
}
