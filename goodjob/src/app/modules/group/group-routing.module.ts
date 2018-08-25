import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  containers
} from './containers';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
