import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'retro-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  name: string;
  role: string;
  roles: Array<object> = [
    {code: 'sm' , view : "Scrum Master"}, 
    {code: 'oth', view : "Non Scrum Master"}
  ];

  ngOnInit() {
    
  }

  login(){
    console.log(this.name, this.role);
  }

  setRole(code: string){
    this.role = code;
  }
}
