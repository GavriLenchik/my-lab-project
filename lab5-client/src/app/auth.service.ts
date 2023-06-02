import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user:any){
    let headers = new Headers();
    const body = user;
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://my-lab-project-production.up.railway.app/account/reg',
    body);

  }

  authUser(user:any){
    let headers = new Headers();
    const body = user;
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://my-lab-project-production.up.railway.app/account/auth',
    body);

  }

  getBooks(){
    return this.http.get('https://my-lab-project-production.up.railway.app/account/books');
  }



  storeUser(token: any, user: any){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user))
    this.token = token;
    this.user = user;
  }

  logout(){
    this.token = null;
    this.user = null;
    localStorage.clear();
  }
}
