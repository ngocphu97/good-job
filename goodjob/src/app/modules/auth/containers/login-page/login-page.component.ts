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
  message = '';

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
    let mess = this.message;
    FB.login((response) => {
      if (response.authResponse) {
        router.navigate(['/home']);
      } else {
        mess = 'Your infomation is not correct, please try again. Thank you.';
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

  logoutWithFb() {
    FB.logout(function (response) {
      console.log(response);
    });
  }

}
