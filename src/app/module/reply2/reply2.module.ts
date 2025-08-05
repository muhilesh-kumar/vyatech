import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Reply2RoutingModule } from './reply2-routing.module';
import { Reply2Component } from './reply2/reply2.component';


@NgModule({
  declarations: [
    Reply2Component
  ],
  imports: [
    CommonModule,
    Reply2RoutingModule
  ]
})
export class Reply2Module { }
