import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WellcomeRoutingModule } from './wellcome-routing.module';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { RouterModule } from '@angular/router';
import { routes } from './wellcome-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';

import { HelloComponent } from './components/hello/hello.component';
import { CalendarModule } from 'angular-calendar';
import { TotalDataComponent } from './components/total-data/total-data.component';
import { SchedulePostDialogComponent } from './components/schedule-post-dialog/schedule-post-dialog.component';

import { Ng5TimePickerModule } from 'ng5-time-picker';
import { InputFileModule } from 'ngx-input-file';
import { InputFileConfig } from 'ngx-input-file/src/lib/interfaces/input-file-config';

import { IgxCalendarModule, IgxDialogModule } from 'igniteui-angular';

const config: InputFileConfig = {};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    WellcomeRoutingModule,
    SharedModule,
    CalendarModule,
    MatDialogModule,
    Ng5TimePickerModule,
    InputFileModule.forRoot(config),
    IgxCalendarModule,
    IgxDialogModule
  ],
  declarations: [
    WellcomeComponent,
    HelloComponent,
    TotalDataComponent,
    SchedulePostDialogComponent
  ],
  entryComponents: [
    SchedulePostDialogComponent
  ],
  providers: [DatePipe]
})
export class WellcomeModule { }
