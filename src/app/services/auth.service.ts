import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(email: string,password:string){
    this.httpClient.post('http://localhost:3000/auth/login',{email,password})
  }
}
