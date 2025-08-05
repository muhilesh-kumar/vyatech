import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Reply2Component } from './reply2/reply2.component';

const routes: Routes = [{
  path: '',component: Reply2Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Reply2RoutingModule { }
