import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Temp2RoutingModule } from './temp2-routing.module';
import { Temp2Component } from './temp2/temp2.component';


@NgModule({
  declarations: [
    Temp2Component
  ],
  imports: [
    CommonModule,
    Temp2RoutingModule
  ]
})
export class Temp2Module { }
