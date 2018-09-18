import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(!(this.authService.user != undefined)) {
      this.router.navigate(['/login'], { queryParams: {ref: state.url}});
      return false;
    } else if (this.authService.user.roles.indexOf('User') > -1) {
      return true;
    } else {
      this.router.navigate(['/register']);
      return false;
    }
  }
}
