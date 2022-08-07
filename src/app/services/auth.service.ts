import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject(false);
  constructor(
    private apiSerivce: APIService
  ) { }

  login(email : string, password : string) {
    this.apiSerivce.API(`auth/login/`, 'POST' ,{email,password} ).subscribe({
      next : (data:any) => {
        localStorage.setItem('token', data.key);
        this.isLoggedIn.next(true);
      },
      error : console.error
    })
    return this.isLoggedIn.asObservable();
  }

  register(username : string, email : string, password : string, password2 : string) {
    this.apiSerivce.API(`auth/register/`, 'POST' ,{username,email,password,password2} ).subscribe({
      next : (data:any) => {
        localStorage.setItem('token', data.key);
        this.isLoggedIn.next(true);
      },
      error : console.error
    })
    return this.isLoggedIn.asObservable();
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn.next(false);
  }
}
