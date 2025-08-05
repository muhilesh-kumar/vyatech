import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousingComponent } from './housing/housing.component';

const routes: Routes = [{
  path:'', component:HousingComponent 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousingRoutingModule { }
