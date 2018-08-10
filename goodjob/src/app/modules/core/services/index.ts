import { LocalStorageService } from './web-storage/local-storage.service';
import { SessionStorageService } from './web-storage/session-storage.service';
import { SplashScreenService } from './splash-screen.service';
import { NavigateService } from './navigate/navigate.service';

export {
  LocalStorageService,
  SessionStorageService,
  SplashScreenService,
  NavigateService
};

export const services = [
  LocalStorageService,
  SessionStorageService,
  SplashScreenService,
  NavigateService
];

