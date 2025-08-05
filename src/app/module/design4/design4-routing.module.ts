import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Design4Component } from './design4/design4.component';

const routes: Routes = [{
  path: '',component: Design4Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Design4RoutingModule { }
