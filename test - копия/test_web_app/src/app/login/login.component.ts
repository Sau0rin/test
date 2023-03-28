
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent  {
 loginForm!: FormGroup;
 constructor(private login: LoginService,
  private route: Router
  ) { }

 submitLogin(){
  this.login.login(this.loginForm.value).subscribe({next:()=> this.route.navigate(['admin'])}),
  this.login.userLogin(this.loginForm.value).subscribe({next:()=> this.route.navigate(['LK',this.loginForm.value.login])})


 }
 

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'login': new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required])
    });
    if (this.login.isLogget()){
      this.route.navigate(['admin'])
    }
    if (this.login.isLogget2()){
      this.route.navigate(['LK','user'])
    }

  }

}
