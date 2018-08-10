import { Component, OnInit } from '@angular/core';

import {
  AuthService,
  FacebookLoginProvider
} from 'angular-6-social-login';
import { Router } from '@angular/router';

interface Window {
  fbAsyncInit: () => any;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private socialAuthService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ', userData);
        this.router.navigate(['/']);
      }
    );
  }

}
