import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { routes } from './home.routing';
import { containers } from './containers';
import { components } from './components';

import { AddProjectDialogComponent } from '@app/dialog/add-project-dialog/add-project-dialog.component';
import { DialogModule } from '@app/dialog/dialog.module';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    DialogModule
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
