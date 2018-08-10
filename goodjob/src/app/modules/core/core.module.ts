import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { services } from './services';
import { RetryInterceptor, HandleHttpResponseInterceptor } from './interceptors';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { components } from './components';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HandleHttpResponseInterceptor, multi: true },
    ...services
  ],
  declarations: [
    DashboardComponent,
    components
  ]
})
export class CoreModule {
}
