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
  }

  loginWithFb() {
    const router = this.router;
    FB.login(function (response) {
      if (response.authResponse) {
        console.log('you are connect now');
        router.navigate(['/home']);
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

  login() {
    this.router.navigate(['/home']);
  }

}
