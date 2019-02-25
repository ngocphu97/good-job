import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services';

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

  constructor(private service: AuthService, private router: Router) { }

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

  loginWithGJ(user: any) {
    // this.service.login(user).subscribe(res => {
    //   console.log(res);
    // });
    this.router.navigate(['/home']);
  }

  login() {
    this.router.navigate(['/home']);
  }

}
