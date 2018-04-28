import { Component, OnInit } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  model: User ={ email: "eaar89@gmail.com", name: "Edwin", photo: "asd" };

  constructor() {  }

  save(){
    alert(JSON.stringify(this.model));
  }

  ngOnInit() {
  }

}
