import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import {MatDatepickerModule} from '@angular/material/datepicker';

import { FormsModule } from '@angular/forms';
import { GroupRoutingModule } from './group-routing.module';
import { AddGroupPageComponent } from './containers/add-group-page/add-group-page.component';
import { AddGroupFormComponent } from './components/add-group-form/add-group-form.component';

@NgModule({
  imports: [
    CommonModule,
    GroupRoutingModule,
    MatDatepickerModule,

    // StoreModule.forFeature(fromStore.featureName, fromStore.reducers),
    // EffectsModule.forFeature([...fromStore.effects]),

    FormsModule,
    SharedModule
  ],
  declarations: [
    AddGroupPageComponent,
    AddGroupFormComponent
  ]
})
export class GroupModule { }
