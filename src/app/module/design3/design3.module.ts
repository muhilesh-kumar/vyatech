import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Design3RoutingModule } from './design3-routing.module';
import { Design3Component } from './design3/design3.component';


@NgModule({
  declarations: [
    Design3Component
  ],
  imports: [
    CommonModule,
    Design3RoutingModule
  ]
})
export class Design3Module { }
