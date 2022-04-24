import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  email: string = '';
  password: string = '';
  
  userLogin(data:NgForm){
    this.auth.callLogin(data.value)
    // console.log("Login data", data.value)
  }

}
