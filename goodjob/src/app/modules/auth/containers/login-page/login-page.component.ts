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
    // this.loginWithFb();
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
    FB.login(function (response) {
      console.log(response.data.url);
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

  getInfo() {
    const array = this.connectAccount;
    FB.api(`/me`, 'GET',
      {
        fields: 'accounts{photos.width(150).height(150){picture}}'
      }, (response) => {
        const length = response.accounts.data.length;
        for (let i = 0; i < length; i++) {
          const pics = response.accounts.data[i].photos;
          array.push(pics.data[0].picture);
        }
        if (response.error) {
          console.log(response.error);
        }
      }
    );
    console.log(this.connectAccount);
  }

  setImg() {
    const imgs = [
      // tslint:disable-next-line:max-line-length
      'https://scontent.xx.fbcdn.net/v/t1.0-0/p130x130/35970258_249376572488510_6575838450526715904_n.png?_nc_cat=0&oh=90ebac333d88d601e9c29e24982fdf84&oe=5BF8B81',
      // tslint:disable-next-line:max-line-length
      'https://scontent.xx.fbcdn.net/v/t1.0-0/p130x130/35850745_2100716476884021_3280890685229629440_n.png?_nc_cat=0&oh=e1fe3c1ee97511e2f9702a0eb8fb07e5&oe=5BF7DBB1',
      // tslint:disable-next-line:max-line-length
      'https://scontent.xx.fbcdn.net/v/t1.0-0/p130x130/23622428_2036881979913638_4427168835060286332_n.jpg?_nc_cat=0&oh=2a16d65233f8be2ae7ef59dbfc706d5b&oe=5C03FB71',
      // tslint:disable-next-line:max-line-length
      'https://scontent.xx.fbcdn.net/v/t1.0-0/s130x130/12806015_1168238283186346_4477812590008725656_n.jpg?_nc_cat=0&oh=0e2b793cc3c2401b451ce36cbc86d424&oe=5C033039',
      // tslint:disable-next-line:max-line-length
      'https://scontent.xx.fbcdn.net/v/t1.0-0/p130x130/39585314_2494938747498337_2849354456049385472_n.jpg?_nc_cat=0&oh=a4365d93cddffc8fd70fdd603195d760&oe=5C080B6B'
    ];
    imgs.forEach(element => {
      this.connectAccount.push(element);
    });

    console.log(this.connectAccount);
  }

}
