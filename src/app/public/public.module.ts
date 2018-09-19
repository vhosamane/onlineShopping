import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';
import { publicRouting } from './publicRouting';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { CompareValidatorDirective } from '../compare-validator.directive';
import { NgxPasswordToggleModule } from 'ngx-password-toggle';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(publicRouting),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPasswordToggleModule
  ],
  declarations: [HomeDashboardComponent, CompareValidatorDirective, LoginComponent, RegisterComponent, MenuComponent, StoreComponent, CartComponent]
})
export class PublicModule { }
