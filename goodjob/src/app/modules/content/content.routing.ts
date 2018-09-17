import { Routes } from '@angular/router';
import { CreatePageComponent, SchedulePageComponent, StatusPageComponent } from './containers';
import { EditPostComponent } from './components/edit-post/edit-post.component';

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
    path: 'test',
    component: EditPostComponent
  }
];

