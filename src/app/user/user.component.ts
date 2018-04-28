import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angular5-social-login';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  model: User ={ email: "eaar89@gmail.com", name: "Edwin", photo: "asd" };
  user: SocialUser;

  constructor(private socialAuthService: AuthService) {
    socialAuthService.authState.subscribe(user => {
      this.user = user;
    });
  }

  save(){
    alert(JSON.stringify(this.model));
  }

  ngOnInit() {
  }

}
