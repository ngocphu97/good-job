import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare var FB: any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  connectAccount = new Array<any>();
  text: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.init();
  }

  init() {
    FB.init({
      appId: '389593224888209',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v3.1'
    });
  }

  loginWithFb() {
    const router = this.router;
    FB.login(function (response) {
      console.log(response);
      if (response.authResponse) {
        console.log('Welcome! Fetching your information.... ');
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
      router.navigate(['/content']);
    });
  }

  logoutWithFb() {
    FB.logout(function (response) {
      console.log(response);
    });
  }

}
