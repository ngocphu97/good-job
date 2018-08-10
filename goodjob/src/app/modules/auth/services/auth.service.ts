import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@app/environment';
import { TokenStoreManager } from './token-storage.service';
import { LoginModel, AuthToken } from '../models';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private tokenStoreManager: TokenStoreManager) {
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
    const token = this.getAuthToken();
    return token && AuthToken.isValid(token);
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
