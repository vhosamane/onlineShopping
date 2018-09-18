import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../models/user-login';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  constructor(private _http: HttpClient) {
    this.loadAuthUser();
  }

  ValidateUser(userLogin: UserLogin) {
    return this._http.get(environment.apiUrl + '/users.json')
           .pipe(map((res: any) => {
             const data = res;
             for(const key in data) {
               const user: User = data[key];
               if(user.email === userLogin.EmailId && user.password === userLogin.Password) {
                 user.userId = key;
                 this.setAuthUser(user);
                 return user;
               }
             }
             return null;
           }));
  }

  setAuthUser(user: User) {
    localStorage['authInfo'] = JSON.stringify(user);
    this.user = user;
  }

  loadAuthUser() {
    if(localStorage['authInfo'] !== undefined && localStorage['authInfo'] !== null) {
      this.user = JSON.parse(localStorage['authInfo']);
    }
  }

  signOut() {
    localStorage.removeItem('authInfo');
    this.user = undefined;
  }
}
