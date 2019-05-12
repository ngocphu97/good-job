import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { GroupRoutingModule } from './group-routing.module';

import { containers } from './containers';
import { components } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    GroupRoutingModule,
    MatDatepickerModule
  ],
  declarations: [
    ...containers,
    ...components,
  ],
})
export class GroupModule { }
