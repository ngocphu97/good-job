import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { routes } from './analytics.routing';
import { AnalyticsPageComponent } from './containers/analytics-page/analytics-page.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { AnalyticsDetailComponent } from './components/analytics-detail/analytics-detail.component';
import { ExportToFileComponent } from './components/export-to-file/export-to-file.component';
import { CalendarComponent } from './components/calendar/calendar.component';

import { ChartsModule } from 'ng2-charts';
import { NetLikeComponent } from './components/net-like/net-like.component';
import { PageFansOnlineComponent } from './components/page-fans-online/page-fans-online.component';

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
    AnalyticsPageComponent,
    ClientsListComponent,
    AnalyticsDetailComponent,
    ExportToFileComponent,
    CalendarComponent,
    NetLikeComponent,
    PageFansOnlineComponent
  ]

})
export class AnalyticsModule { }
