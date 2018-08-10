import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import 'rxjs/operator/do';

import { environment } from '@app/environment';
import { AuthService } from '../services';
import { AuthToken } from '../models';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest = request.clone();
    const addToken: boolean = environment.authentication.autoAuthorizedUris.some((rx: RegExp) => {
      return rx.test(request.url);
    });
    const token: AuthToken = this.authService.getAuthToken();

    if (addToken && token && AuthToken.isValid(token)) {
      authRequest = request.clone({
        headers: request.headers.set('Authorization', `${token.tokenType} ${token.accessToken}`)
      });
    }

    return next.handle(authRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error && error.status === 401) {
          const authToken: AuthToken = this.authService.getAuthToken();
          if (authToken && authToken.refreshToken) {
            this.authService.refreshToken().pipe(
              mergeMap((newToken: any) => {
                authRequest = request.clone({
                  headers: request.headers.set('Authorization', `${newToken.token_type} ${newToken.access_token}`)
                });

                return next.handle(authRequest);
              })
            ).subscribe();

          } else {
            return Observable.throw(error);
          }
        } else {
          return Observable.throw(error);
        }
      })
    );

  }
}
