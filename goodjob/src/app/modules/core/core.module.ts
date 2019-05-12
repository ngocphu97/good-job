import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule } from '@angular/forms';

import { services } from './services';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { components } from './components';
import { PublishNowDialogComponent, AddProjectDialogComponent } from '@app/dialog/containers';
import { DialogModule } from '@app/dialog/dialog.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    DialogModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: HandleHttpResponseInterceptor, multi: true },
    services
  ],
  declarations: [
    DashboardComponent,
    components
  ],
  entryComponents: [
    PublishNowDialogComponent,
    AddProjectDialogComponent
  ]
})
export class CoreModule {
}
