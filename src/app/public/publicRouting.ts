import { Routes } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserAuthGuard } from "../shared/user-auth.guard";
import { from } from 'rxjs';

export const publicRouting: Routes = [
  { path: '', component: HomeDashboardComponent, children : [
    { path: "", component: HomepageComponent},
    { path: "login", component: LoginComponent},
    { path: "register", component: RegisterComponent},
    { path: "store", component: StoreComponent, canActivate:[UserAuthGuard]},
    { path: "cart", component: CartComponent},
    { path: "home", component: HomepageComponent}
  ]}
];
