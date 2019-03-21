import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule } from '@angular/forms';

import { services } from './services';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { components } from './components';
import { PublishNowDialogComponent } from '@app/dialog/containers/publish-now-dialog/publish-now-dialog.component';
import { MatDialogModule } from '@angular/material';
import { DialogModule } from '@app/dialog/dialog.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
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
    PublishNowDialogComponent
  ]
})
export class CoreModule {
}
