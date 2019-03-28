import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '@app/auth/services';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  connectAccount = new Array<any>();
  accessToken$: Observable<any>;
  errorMessage = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private zone: NgZone
  ) { }

  ngOnInit() {
  }


  loginWithFb(event) {
    this.authService.loginWithFb()
      .pipe()
      .subscribe(data => {
        if (data) {
          console.log(data);
          // this.zone.run(() => { this.router.navigate(['/home']); });
        }
      });
  }

  loginWithGJ(user: any) {
    this.router.navigate(['/home']);
  }

  login() {
    this.router.navigate(['/home']);
  }

}
