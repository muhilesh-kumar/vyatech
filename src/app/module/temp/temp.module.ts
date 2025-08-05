import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempRoutingModule } from './temp-routing.module';
import { TempComponent } from './temp/temp.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    TempComponent
  ],
  imports: [
    CommonModule,
    TempRoutingModule,DialogModule,FormsModule,DropdownModule,DragDropModule,
  ]
})
export class TempModule { }
