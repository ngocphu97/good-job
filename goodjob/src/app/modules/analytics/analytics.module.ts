import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { ChartsModule } from 'ng2-charts';

import { routes } from './analytics.routing';
import { containers } from './containers';
import { components } from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    SharedModule,
  ],
  declarations: [
    ...components,
    ...containers
  ]

})
export class AnalyticsModule { }
