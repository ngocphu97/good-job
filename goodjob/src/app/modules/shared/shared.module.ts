import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { materialModules } from './material.module';
import { components, entryComponents } from './components';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ...materialModules
  ],
  declarations: [
    ...components
  ],
  entryComponents: [
    ...entryComponents
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    ...materialModules,
    ...components,
    ...entryComponents
  ]
})
export class SharedModule {
}
