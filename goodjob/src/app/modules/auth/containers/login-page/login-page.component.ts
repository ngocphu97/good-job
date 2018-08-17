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

  connectAccount = [];

  connectAccountImg = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.init();
    this.loginWithFb();
  }

  init() {
    FB.init({
      appId: '389593224888209',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v3.1'
    });

    console.log('init roi ne');
  }

  loginWithFb() {
    FB.login(function (response) {
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        // FB.api('/me?fields=about,accounts{access_token,id,feed,photos{images}}', function (res) {
        //   this.connectAccount = res.accounts.data;
        // });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

  getImg() {
    console.log(this.connectAccount);
  }

  post() {
    FB.api(
      '/me/feed',
      'POST',
      {
        // tslint:disable-next-line:max-line-length
        access_token: 'EAAFiVT3Gv5EBACNvFKXc4F1zb2Br18hf4r2ZA5uaxQkCpHR3RykObkLuEdLE2Ygw1ZC0pdjlY0u2Bh9l0DRL27sGZBDt0ZBq3ylThi9uLqTpYjpuPZA2mxe46QWt1heMkp87UYzhuthN1TH7XNoAylWGfiIOjhn3A2end1Mq5ZBjMcIZAnU0RMro4KsLayulxKKuRDL4ba7rQZDZD',
        message: 'This is a test demo',
        sheduled_publish_time: 'now'
      },
      function (response) {
        console.log(response);
        if (response && !response.error) {
          /* handle the result */
        }
      }
    );

  }

  test() {
    const body = new FormData();
    body.append('message', 'test test');
    // tslint:disable-next-line:max-line-length
    this.http.post('https://graph.facebook.com/v3.1/1986831114966270_2030001103982604?access_token=EAAFiVT3Gv5EBAIbR70zC8Ifeof7RllIYjbZB66kGxoO0vxwLuZAnk35thbOxCgQFtZB0EObwlZCyOQrZC4Xd2D4IaZBuxXwOIdXq4ZAVVNJbQgvYmXDlELySqoOGZAZBo2JmifbUw1jsaqBake44rZA7o7odxxS3JxB9bNEMpooEqOPLGXqHWW0DdPLgKaEs0ZAZBBAZD&debug=all&format=json&method=get&pretty=0&suppress_http_code=1', body).subscribe(data => {
      console.log(data);
    });
  }

  test2() {
    this.http.get('http://localhost/phpmyadmin/sql.php?server=1&db=sitepoint&table=employees&pos=0').subscribe(data => {
      console.log(data);
    });
  }
}
