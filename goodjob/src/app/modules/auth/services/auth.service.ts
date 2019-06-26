import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

declare var FB: any;

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  loginWithGudjob(u): Observable<any> {
    const user = {
      email: 'admin@gmail.com',
      password: 'admin123'
    };
    return this.http.post('http://localhost:3000/api/users/login', user);
  }

  loginWithFb(): Observable<any> {
    return Observable.create((observer) => {
      FB.login((response) => {
        localStorage.setItem('access_token', response.authResponse.accessToken);
        observer.next(response);
        observer.complete();
      });
    });
  }
}
