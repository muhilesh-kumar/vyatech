import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintainComponent } from './maintain/maintain.component';

const routes: Routes = [{path:'',component: MaintainComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintainRoutingModule { }
