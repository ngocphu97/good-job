import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { materialModules } from './material.module';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { components, entryComponents } from './components';
import { directives } from './directive';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ...materialModules
  ],
  declarations: [
    ...components,
    ...directives
  ],
  entryComponents: [
    ...entryComponents
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    PickerModule,
    ...materialModules,
    ...components,
    ...entryComponents,
    ...directives
  ]
})
export class SharedModule {
}
