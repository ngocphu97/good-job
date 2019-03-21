import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { routes } from './home.routing';
import { containers } from './containers';
import { components } from './components';

import { DialogModule } from '@app/dialog/dialog.module';
import { AddProjectDialogComponent } from '@app/dialog/containers/add-project-dialog/add-project-dialog.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    DialogModule,
  ],
  declarations: [
    containers,
    components
  ],
  entryComponents: [
    AddProjectDialogComponent
  ]
})

export class HomeModule { }
