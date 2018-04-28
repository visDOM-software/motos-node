import { Component } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angular5-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public user: SocialUser;
  public authorized: boolean = false;

  constructor(private socialAuthService: AuthService) {
    socialAuthService.authState.subscribe(user => {
      this.authorized = (user != null);
      this.user = user;
    });
  }
}
