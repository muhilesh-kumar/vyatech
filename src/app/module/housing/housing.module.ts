import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousingRoutingModule } from './housing-routing.module';
import { HousingComponent } from './housing/housing.component';


@NgModule({
  declarations: [
    HousingComponent
  ],
  imports: [
    CommonModule,
    HousingRoutingModule
  ]
})
export class HousingModule { }
