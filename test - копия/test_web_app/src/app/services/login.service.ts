import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url="Users";
  constructor(

    private http:HttpClient,
    private route:Router

  ) { }



  setToken(token:string) {
localStorage.setItem('token', token)
  }
  getToken(){
    return localStorage.getItem('token')
  }
  isLogget(){
    if (this.getToken() == 'dsadvwqe32vr')
      return true
return false
  }

  isLogget2(){
    if (this.getToken() == 'fdsgvfbe3bfds')
      return true
return false
  }
  login(user:{login:string , password:string}): Observable<string| boolean>{
   if (user.login === 'admin' && user.password ==='123'){
    this.setToken('dsadvwqe32vr')
    return of(true)
   }
   return throwError(()=> new Error("faled"))
  }

  userLogin(user:{login:string , password:string}): Observable<string| boolean>{
    if (user.login === 'user' && user.password ==='321'){
     this.setToken('fdsgvfbe3bfds')
     return of(true)
    }
    return throwError(()=> new Error("faled"))
   }

logout()
{
  this.route.navigate(['login'])
}
}
