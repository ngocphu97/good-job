import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { services } from './services';
import { guards } from './guards';
import { routes } from './auth.routing';
import { containers } from './containers';
import { components } from './components';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserModule,
    FormsModule
  ],
  declarations: [
    ...containers,
    ...components
  ],
  providers: [
    ...services,
    ...guards,
  ]
})
export class AuthModule {

}
