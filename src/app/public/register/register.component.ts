import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from '../../services/user-register.service';
import { ToasterService } from '../../services/toaster.service';
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
  states: any;
  distics: any;
  districtDropdown: boolean = true;
  registration : string = "Registration Successful";

  constructor(private userRegister: UserRegisterService, private toasert: ToasterService) {
    this.user = new User();
  }

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.userRegister.getAllCountries()
    .subscribe((res: any) => {
      this.states = res;
    });
  }

  userRegistrationForm(userRegistration: NgForm) {
    //alert(this.user);
    if(userRegistration.valid) {
      this.userRegister.registerUser(this.user);
      this.toasert.showSuccess(this.registration);
      userRegistration.resetForm();
    } else {
      alert("Unsuccessful!!!");
    }
  }

  onSelectState(stateName) {
    this.districtDropdown = false;
    this.userRegister.getSelectedStateDistics(stateName)
      .subscribe((res: any) => {
        this.distics = res;
      });
  }

}
