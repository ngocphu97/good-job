import { LocalStorageService } from './web-storage/local-storage.service';
import { SessionStorageService } from './web-storage/session-storage.service';
import { SplashScreenService } from './splash-screen.service';

export {
  LocalStorageService,
  SessionStorageService,
  SplashScreenService
};

export const services = [
  LocalStorageService,
  SessionStorageService,
  SplashScreenService
];

