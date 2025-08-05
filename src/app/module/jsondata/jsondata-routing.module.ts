import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonIdComponent } from './json-id/json-id.component';

const routes: Routes = [
   {
       path: '',
       component: JsonIdComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsondataRoutingModule { } 
 