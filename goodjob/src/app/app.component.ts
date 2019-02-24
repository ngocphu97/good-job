import { Component } from '@angular/core';

import { SplashScreenService } from '@app/core/services';
declare var FB: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private splashScreen: SplashScreenService;

  /**
   * Do not remove splashScreen in constructor
   */
  constructor(splashScreen: SplashScreenService) {
    this.splashScreen = splashScreen;
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
}
