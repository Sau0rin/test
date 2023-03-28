import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
logout()
{
this.loginService.logout()
}}
