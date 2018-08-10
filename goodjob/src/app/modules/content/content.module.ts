import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { Ng5TimePickerModule } from 'ng5-time-picker';
import { InputFileModule } from 'ngx-input-file';
import { InputFileConfig } from 'ngx-input-file/src/lib/interfaces/input-file-config';
import { IgxCalendarModule, IgxDialogModule } from 'igniteui-angular';

import { routes } from './content.routing';
import { containers } from './containers';
import { components } from './components';

const config: InputFileConfig = {};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    InputFileModule.forRoot(config),

    SharedModule,
    Ng5TimePickerModule,
    IgxCalendarModule,
    IgxDialogModule
  ],
  declarations: [
    ...containers,
    ...components
  ],
  providers: [DatePipe]
})
export class ContentModule { }
