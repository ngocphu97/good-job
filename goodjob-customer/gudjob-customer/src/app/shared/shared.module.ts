import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { containers } from './containers';
import { components } from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [
    containers,
    components
  ],
  exports: [
    containers,
    components
  ]
})
export class SharedModule { }
