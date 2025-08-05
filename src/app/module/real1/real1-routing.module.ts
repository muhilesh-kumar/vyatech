import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Real1Component } from './real1/real1.component';

const routes: Routes = [{
  path: '',component: Real1Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Real1RoutingModule { }
