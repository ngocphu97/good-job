import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared/shared.module';
import { FormsModule } from '@angular/forms';

import * as fromStore from './store';
import { services } from './services';
import { components } from './components';
import { containers } from './containers';
import { routes } from './posts.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    StoreModule.forFeature(fromStore.featureName, fromStore.reducers),
    EffectsModule.forFeature([...fromStore.effects]),

    FormsModule,
    SharedModule
  ],
  declarations: [
    ...containers,
    ...components
  ],
  providers: [
    ...services
  ]
})
export class PostsModule {
}
