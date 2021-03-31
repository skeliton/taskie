import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn().then((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkLoggedIn();
  }

  checkLoggedIn(): boolean {
    return true;
    //TODO:Enable Gaurd
    // if (this.isLoggedIn) {
    //   return true;
    // }
    // // Retain the attempted URL for redirection
    // this.router.navigate(['/'], { replaceUrl: true });
    // return false;
  }
}
