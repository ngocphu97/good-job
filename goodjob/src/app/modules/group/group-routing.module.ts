import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { containers } from './containers';
import { AddGroupPageComponent } from './containers/add-group-page/add-group-page.component';

const routes: Routes = [
  {
    path: '',
    component: AddGroupPageComponent
  },
  // {
  //   path: 'schedule',
  //   component: SchedulePageComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
