import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Real1RoutingModule } from './real1-routing.module';
import { Real1Component } from './real1/real1.component';


@NgModule({
  declarations: [
    Real1Component
  ],
  imports: [
    CommonModule,
    Real1RoutingModule
  ]
})
export class Real1Module { }
