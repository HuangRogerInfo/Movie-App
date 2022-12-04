import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  connectedUser: any = null;

  constructor(private http: HttpClient) {
    this.isLogged();
  }

  login(username: any, password: any): Observable<any> {
    console.log('Connexion');
    return this.http.post(
      'http://localhost:3000/login',
      { username: username, password: password },
      { withCredentials: true }
    );
  }

  logout(): Observable<any> {
    console.log('ddd');
    return this.http.get('http://localhost:3000/logout', {
      withCredentials: true,
    });
  }

  register(
    firstName: any,
    lastName: any,
    username: any,
    password: any
  ): Observable<any> {
    return this.http.post(
      'http://localhost:3000/register',
      {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
      },
      { withCredentials: true }
    );
  }

  isLogged(): void {
    this.http
      .get('http://localhost:3000/islogged', { withCredentials: true })
      .subscribe({
        next: (connectedUser) => (this.connectedUser = connectedUser),
        error: (error) => console.log('not connected', error),
        complete: () => console.log('completed'),
      });
  }
}
