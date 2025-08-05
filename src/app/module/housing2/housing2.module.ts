import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Housing2RoutingModule } from './housing2-routing.module';
import { Housing2Component } from './housing2/housing2.component';


@NgModule({
  declarations: [
    Housing2Component
  ],
  imports: [
    CommonModule,
    Housing2RoutingModule
  ]
})
export class Housing2Module { }
