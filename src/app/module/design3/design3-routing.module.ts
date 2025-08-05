import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Design3Component } from './design3/design3.component';

const routes: Routes = [{
  path:'',component: Design3Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Design3RoutingModule { }
