import { Component } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angular5-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  public user: SocialUser;
  public authorized: boolean = false;

  constructor(private socialAuthService: AuthService,
    private router: Router) {
    socialAuthService.authState.subscribe(user => {
      this.authorized = (user != null);
      this.user = user;
    });
  }
  public signOut() {
    this.socialAuthService.signOut();
    this.router.navigate(['']);
  }
}
