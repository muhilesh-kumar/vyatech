import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlindComponent } from './blind/blind.component';

const routes: Routes = [{
  path:'',component: BlindComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlindRoutingModule { }
