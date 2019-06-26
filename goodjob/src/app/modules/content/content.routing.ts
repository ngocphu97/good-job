import { Routes } from '@angular/router';
import { CreatePageComponent, SchedulePageComponent, StatusPageComponent } from './containers';
import { EditWizardComponent } from './components/edit-wizard/edit-wizard.component';

export const routes: Routes = [
  {
    path: 'status',
    component: StatusPageComponent
  },
  {
    path: ':projectId',
    component: CreatePageComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'schedule',
  //   component: SchedulePageComponent
  // },

  // {
  //   path: 'demo',
  //   component: EditWizardComponent
  // }
];

