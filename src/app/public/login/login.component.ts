import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../models/user-login';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router, ActivatedRoute } from '@angular/router';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserLogin;
  ref: any;
  invalidCredential: boolean = false;
  //userLogin: FormGroup;
  //submitted: boolean = false;
  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.user = new UserLogin();

    this.activatedRoute.queryParams.subscribe((params) => {
      this.ref = params.ref;
    });
  }

  ngOnInit() {
    /*this.userLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });*/
  }

  /*get f() {
    return this.userLogin.controls;
  }*/

  /*loginUserFrm(userLogin) {
    this.submitted = true;
    if(userLogin.valid) {
      alert("success!!!");
    } else {
      alert("Unsuccessful !!!!!");
    }
  }*/

  userLogin(login: NgForm) {
    if(login.valid) {
      //alert("Succes full");
      this.authService.ValidateUser(this.user)
      .subscribe((result) => {
        console.log(result);
        let user: User = result;
        if(user != null) {
          if(this.ref !== undefined && this.ref !== '') {
            this.router.navigate([this.ref]);
          } else {
            if(user.roles.indexOf('Admin') > -1 ) {
              this.router.navigate(['admin']);
            } else {
              this.router.navigate(['/']);
            }
          }
        }
        else {
          this.invalidCredential = true;
        }
      });
    }
  }

}
