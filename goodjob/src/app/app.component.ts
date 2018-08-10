import { Component } from '@angular/core';

import { SplashScreenService } from '@app/core/services';

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
  }
}
