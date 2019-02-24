import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewPageComponent } from './containers/preview-page/preview-page.component';
import { WellcomePageComponent } from './containers/wellcome-page/wellcome-page.component';
import { DashboardComponent } from '../shared/containers/dashboard/dashboard.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',
    component: WellcomePageComponent
  },
  {
    path: 'preview',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: PreviewPageComponent
      },
      {
        path: 'post/:id',
        component: PostDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviewRoutingModule { }
