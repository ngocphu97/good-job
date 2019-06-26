import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

import { MatDialogModule, MatDatepickerModule } from '@angular/material';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import { InputFileConfig, InputFileModule } from 'ngx-input-file';

import { containers } from './containers';
import { components } from './components';

const config: InputFileConfig = {
  iconAdd: 'add_circle_outline'
};

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatDatepickerModule,
    NgxMaterialTimepickerModule,

    FormsModule,
    InputFileModule.forRoot(config)
  ],
  exports: [
    containers,
    components
  ],
  declarations: [
    containers,
    components
  ]
})
export class DialogModule { }
