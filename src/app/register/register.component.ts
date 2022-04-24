import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  name: string = '';
  email: string = "";
  password: string = "";
  confirmpwd: string = "";
  terms: boolean = false;

  newUserRegister(newUserData: NgForm) {
    this.auth.callApi(newUserData.value);
    console.log('data', newUserData.value);
    newUserData.reset();
    this._router.navigate(['login'])
  }

}
