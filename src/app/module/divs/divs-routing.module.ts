import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivsComponent } from './divs/divs.component';

const routes: Routes = [{
  path:'',component: DivsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivsRoutingModule { }
