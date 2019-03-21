import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';


import { containers } from './containers';
import { components } from './components';

import { AddProjectDialogComponent } from './containers/add-project-dialog/add-project-dialog.component';
import { PublishNowDialogComponent } from './containers/publish-now-dialog/publish-now-dialog.component';
import { InputFileConfig, InputFileModule } from 'ngx-input-file';
import { MatDialogModule } from '@angular/material';

const config: InputFileConfig = {
  iconAdd: 'add_circle_outline'
};

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    FormsModule,
    InputFileModule.forRoot(config)
  ],
  exports: [
    containers,
    components
  ],
  declarations: [
    containers,
    components
  ]
})
export class DialogModule { }
