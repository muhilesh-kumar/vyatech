import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealComponent } from './real/real.component';

const routes: Routes = [{
  path: '',component: RealComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealRoutingModule { }
