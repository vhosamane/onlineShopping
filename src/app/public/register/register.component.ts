import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from '../../services/user-register.service';
import { Product } from '../../models/product';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  products: Product;
  constructor(private userRegister: UserRegisterService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  userRegistrationForm(userRegistration: NgForm) {
    //alert(this.user);
    if(userRegistration.valid) {
      this.userRegister.registerUser(this.user);
    } else {
      alert("Unsuccessful!!!");
    }
  }

}
