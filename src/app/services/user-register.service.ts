import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private db: AngularFireDatabase) { }

  registerUser(userDetails) {
    //alert(userDetails);
    userDetails.roles[0] = 'user';
    userDetails.userId = '123456789';
    this.db.list('/users').push(userDetails);
  }
}
