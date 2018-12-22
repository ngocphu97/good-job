import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './home.routing';
import { containers } from './containers';
import { components } from './components';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    containers,
    components
  ]
})
export class HomeModule { }
