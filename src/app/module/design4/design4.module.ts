import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Design4RoutingModule } from './design4-routing.module';
import { Design4Component } from './design4/design4.component';


@NgModule({
  declarations: [
    Design4Component
  ],
  imports: [
    CommonModule,
    Design4RoutingModule
  ]
})
export class Design4Module { }
