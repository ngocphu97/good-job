import { Routes } from '@angular/router';
import { CreatePageComponent, SchedulePageComponent, StatusPageComponent } from './containers';
import { EditWizardComponent } from './components/edit-wizard/edit-wizard.component';

export const routes: Routes = [
  {
    path: '',
    component: CreatePageComponent
  },
  {
    path: 'schedule',
    component: SchedulePageComponent
  },
  {
    path: 'status',
    component: StatusPageComponent
  },
  {
    path: 'demo',
    component: EditWizardComponent
  }
];

