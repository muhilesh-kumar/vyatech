import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealRoutingModule } from './real-routing.module';
import { RealComponent } from './real/real.component';


@NgModule({
  declarations: [
    RealComponent
  ],
  imports: [
    CommonModule,
    RealRoutingModule
  ]
})
export class RealModule { }
