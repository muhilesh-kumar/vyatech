import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivsRoutingModule } from './divs-routing.module';
import { DivsComponent } from './divs/divs.component';



@NgModule({
  declarations: [
    DivsComponent
  ],
  imports: [
    CommonModule,
    DivsRoutingModule
  ]
})
export class DivsModule { }
