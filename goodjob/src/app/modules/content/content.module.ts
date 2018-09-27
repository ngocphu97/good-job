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

import { CalendarModule } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routes } from './content.routing';
import { containers } from './containers';
import { components } from './components';

import { AddGroupFormComponent } from './components/add-group-form/add-group-form.component';

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
    IgxDialogModule,

    CalendarModule.forRoot(),
    FlatpickrModule.forRoot(),
    NgbModule.forRoot()
  ],
  declarations: [
    ...containers,
    ...components,
  ],
  entryComponents: [
    AddGroupFormComponent
  ],
  providers: [DatePipe]
})
export class ContentModule { }
