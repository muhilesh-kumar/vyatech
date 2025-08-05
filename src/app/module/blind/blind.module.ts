import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlindRoutingModule } from './blind-routing.module';
import { BlindComponent } from './blind/blind.component';


@NgModule({
  declarations: [
    BlindComponent
  ],
  imports: [
    CommonModule,
    BlindRoutingModule
  ]
})
export class BlindModule { }
