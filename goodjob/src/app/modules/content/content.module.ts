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

import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routes } from './content.routing';
import { containers } from './containers';
import { components } from './components';

import { DialogModule } from '@app/dialog/dialog.module';
import { AddProjectDialogComponent } from '@app/dialog/containers/add-project-dialog/add-project-dialog.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

const config: InputFileConfig = {};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DialogModule,

    InputFileModule.forRoot(config),
    Ng5TimePickerModule,
    IgxCalendarModule,
    IgxDialogModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FlatpickrModule.forRoot(),
    NgbModule
  ],
  declarations: [
    ...containers,
    ...components,
  ],
  entryComponents: [
    AddProjectDialogComponent,
  ],
  providers: [DatePipe]
})
export class ContentModule { }
