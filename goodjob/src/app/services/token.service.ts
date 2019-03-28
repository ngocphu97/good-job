import { Injectable } from '@angular/core';

declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken() {
    FB.login(function (response) {
      if (response.authResponse) {
        this.accessToken = response.authResponse;
        this.service.saveAuthToken(this.accessToken);
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
    return '';
  }
}
