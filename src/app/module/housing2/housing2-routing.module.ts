import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Housing2Component } from './housing2/housing2.component';

const routes: Routes = [{
  path: '',component: Housing2Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Housing2RoutingModule { }
