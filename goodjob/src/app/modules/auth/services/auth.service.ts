import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@app/environment';

import { JwtHelperService } from '@auth0/angular-jwt';

import { TokenStoreManager } from './token-storage.service';
import { LoginModel, AuthToken } from '../models';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
    private tokenStoreManager: TokenStoreManager,
    private jwtHelper: JwtHelperService) {
  }

  public login(user: LoginModel): Observable<any> {
    return this.http.post(`${environment.rootApiUrl}/connect/token`, user);
  }

  public logout(): Observable<any> {
    return this.http.post(`${environment.rootApiUrl}/api/account/logout`, null);
  }

  public refreshToken(): Observable<any> {
    return this.http.post(`${environment.rootApiUrl}/connect/token`, {});
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
    // return token && AuthToken.isValid(token);
  }

  public getAuthToken(): AuthToken {
    return this.tokenStoreManager.get();
  }

  public saveAuthToken(token: AuthToken): void {
    this.tokenStoreManager.save(token);
  }

  public clearAuthToken(): void {
    this.tokenStoreManager.remove();
  }

}
