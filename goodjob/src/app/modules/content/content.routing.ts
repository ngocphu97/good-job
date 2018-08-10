import { Routes } from '@angular/router';
import { CreatePageComponent, SchedulePageComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    component: CreatePageComponent
  },
  {
    path: 'schedule',
    component: SchedulePageComponent
  }
];

