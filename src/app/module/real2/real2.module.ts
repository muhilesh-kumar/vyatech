import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Real2RoutingModule } from './real2-routing.module';
import { Real2Component } from './real2/real2.component';



@NgModule({
  declarations: [
    Real2Component
  ],
  imports: [
    CommonModule,
    Real2RoutingModule,

  ]
})
export class Real2Module { }
