import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PreviewRoutingModule } from './preview-routing.module';
import { SharedModule } from '../shared/shared.module';

import { containers } from './containers';
import { components } from './components';
import { services } from './service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    PreviewRoutingModule,
    SharedModule,
  ],
  declarations: [
    containers,
    components
  ],
  providers: [
    services
  ]
})
export class PreviewModule { }
