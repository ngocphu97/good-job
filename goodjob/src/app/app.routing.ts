import { Routes } from '@angular/router';
import { DashboardComponent } from '@app/core/layout/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        loadChildren: 'app/modules/home/home.module#HomeModule',
        // canActivate: [AuthGuard]
      },
      {
        path: 'contentplan',
        loadChildren: 'app/modules/content/content.module#ContentModule',
        data: { preload: true, delay: false },
      },
      {
        path: 'analytics',
        loadChildren: 'app/modules/analytics/analytics.module#AnalyticsModule',
        data: { preload: true, delay: true },
      },
      {
        path: 'group',
        loadChildren: 'app/modules/group/group.module#GroupModule',
        data: { preload: false, delay: true },
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/home'
  },
];
