import { Component } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angular5-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  private user: SocialUser;
  public authorized: boolean = false;

  constructor(private socialAuthService: AuthService) {
    socialAuthService.authState.subscribe(user => {
      this.authorized = (user != null);
      this.user = user;
    });
  }

}
