import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  //states: any;

  constructor(private db: AngularFireDatabase, private _http: HttpClient) { }

  registerUser(userDetails) {
    //alert(userDetails);
    userDetails.roles[0] = 'user';
    userDetails.userId = '123456789';
    this.db.list('/users').push(userDetails);
  }

  getAllCountries() {
    return this._http.get(environment.apiUrl + '/states.json')
    .pipe(map((res: any) => {
      const data = res;
      const states = [];
      for(let key in data) {
        let state = data[key].state;
        states.push(state);
      }
      return states;
    }));
  }

  getSelectedStateDistics(stateName) {
    return this._http.get(environment.apiUrl + '/states.json')
    .pipe(map((res: any) => {
        const data = res;
        const distics = [];
        for(let key in data) {
          if(data[key].state === stateName) {
            let dist = data[key].districts;
            for(let i=0; i<=dist.length; i++) {
              distics.push(dist[i]);
            }
          }
      }
      return distics;
    }));
  }
}
