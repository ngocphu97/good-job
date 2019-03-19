import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { components } from './index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    components
  ],
  declarations: [
    components
  ]
})
export class DialogModule { }
