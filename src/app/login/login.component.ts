import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'retro-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  userName: string;
  userRoles: Array<string> = [];

  ngOnInit() {
    this.userRoles.push('Scrum Master');
    this.userRoles.push('Scrumies');
  }

}
