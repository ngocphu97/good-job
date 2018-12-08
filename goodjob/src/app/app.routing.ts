import { Routes } from '@angular/router';
import { DashboardComponent } from '@app/core/layout/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'wellcome',
        loadChildren: 'app/modules/wellcome/wellcome.module#WellcomeModule'
      },
      {
        path: 'posts',
        loadChildren: 'app/modules/posts/posts.module#PostsModule'
      },
      {
        path: 'content',
        loadChildren: 'app/modules/content/content.module#ContentModule'
      },
      {
        path: 'analytics',
        loadChildren: 'app/modules/analytics/analytics.module#AnalyticsModule'
      },
      {
        path: 'group',
        loadChildren: 'app/modules/group/group.module#GroupModule'
      },
    ]
  },
  { path: '**', redirectTo: '/wellcome' },
];
