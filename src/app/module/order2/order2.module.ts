import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Order2RoutingModule } from './order2-routing.module';
import { Order2Component } from './order2/order2.component';


@NgModule({
  declarations: [
    Order2Component
  ],
  imports: [
    CommonModule,
    Order2RoutingModule
  ]
})
export class Order2Module { }
