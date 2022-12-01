import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  connectedUser: any = null;

  constructor(private http: HttpClient) {}

  login(login: any, password: any): Observable<any> {
    return this.http.post(
      'http://localhost:3000/login',
      { login: login, password: password },
      { withCredentials: true }
    );
  }

  logout(): Observable<any> {
    console.log('ddd');
    return this.http.get('http://localhost:3000/logout', {
      withCredentials: true,
    });
  }

  register(login: any, password: any, fullName: any): Observable<any> {
    return this.http.post(
      'http://localhost:3000/register',
      { login: login, password: password, fullName: fullName },
      { withCredentials: true }
    );
  }
}