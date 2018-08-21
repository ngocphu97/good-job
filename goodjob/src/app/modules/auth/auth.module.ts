import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
} from 'angular-6-social-login';

import { services } from './services';
import { guards } from './guards';
import { routes } from './auth.routing';
import { containers } from './containers';
import { CommonModule } from '@angular/common';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('389593224888209')
      },
    ]
  );
  return config;
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SocialLoginModule
  ],
  declarations: [
    ...containers
  ],
  providers: [
    ...services,
    ...guards,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ]
})
export class AuthModule {

}
