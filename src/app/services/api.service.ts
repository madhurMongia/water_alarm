import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private BASE_URL = "http://157.245.104.248:8000/";
  constructor(
    private http: HttpClient
  ) { }

  API(url: string, method: string, body?: any) {
    url = this.BASE_URL + url;
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    if(token){
      headers = headers.set('Authorization', `token ${token}`);
    }
    console.log(headers);
    const options = {
      'headers': headers
    };
    if(method === 'GET') {
      return this.http.get(url, options);
    }
    if(method === 'POST') {
      return this.http.post(url, body, options);
    }
    if(method === 'PATCH') {
      return this.http.patch(url, body, options);
    }
    else {
      return this.http.delete(url, options);
    }
  }
}
