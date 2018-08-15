import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var FB: any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.initFb();
  }

  initFb() {
    FB.api(
      '/me/feed',
      'POST',
      {
        // tslint:disable-next-line:max-line-length
        access_token: 'EAAFiVT3Gv5EBAJeb6nOI2C99En4OhKqYYCQmM2ChKIunZAV1pt4wt2QCmWkrfTOpSATvmDmFph9mNOuBHBJJYZBetZB980PK7tKJWzidkv2bs9bzD7leD0i9nTnyglZBOc4fqmmzlRCz6fcqDyoFuSXDuOsaUV4zzPiJEPIY4yBpctmA4ba1iUm7DTESiaZCZCZAwUtPkoAXwZDZD',
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
}
