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
import { PubishDialogComponent } from './components/pubish-dialog/pubish-dialog.component';

import { InputFileModule } from 'ngx-input-file';
import { InputFileConfig } from 'ngx-input-file/src/lib/interfaces/input-file-config';

const config: InputFileConfig = {
  iconAdd: 'add_circle_outline'
};


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    InputFileModule.forRoot(config)
  ],
  entryComponents: [
    PubishDialogComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HandleHttpResponseInterceptor, multi: true },
    ...services
  ],
  declarations: [
    DashboardComponent,
    PubishDialogComponent,
    components
  ]
})
export class CoreModule {
}
