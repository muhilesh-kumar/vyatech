import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreshRoutingModule } from './fresh-routing.module';
import { CrudComponent } from './crud/crud.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [
    CommonModule,
    FreshRoutingModule,FormsModule,HttpClientModule
  ]
})
export class FreshModule { }
