import { Routes } from '@angular/router';
import {
  PostsPageComponent,
  PostDetailPageComponent,
  CreatePostPageComponent,
  SchedulePageComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    component: PostsPageComponent
  },
  {
    path: 'create',
    component: CreatePostPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'calendar',
    component: SchedulePageComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: PostDetailPageComponent
  }
];

