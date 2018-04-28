import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angular5-social-login';

@Injectable()
export class AuthGuardGuardGuard implements CanActivate {
  constructor(private socialAuthService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let isLoggued = false;
    this.socialAuthService.authState.subscribe(user => {
      console.log(user);
      isLoggued = (user !== null);
    });

    if (!isLoggued) {
      this.router.navigate(['login']);
    }

    return isLoggued;
  }
}
