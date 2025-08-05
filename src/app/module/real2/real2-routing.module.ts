import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Real2Component } from './real2/real2.component';

const routes: Routes = [{
  path: '', component: Real2Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Real2RoutingModule { }
