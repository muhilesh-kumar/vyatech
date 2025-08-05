import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { JsondataRoutingModule } from './jsondata-routing.module';
import { JsonIdComponent } from './json-id/json-id.component';
import { DialogModule } from 'primeng/dialog'; 




 

@NgModule({
  declarations: [
    JsonIdComponent
  ],
  imports: [ 
    CommonModule,
    JsondataRoutingModule,DialogModule,ReactiveFormsModule,FormsModule,
    DialogModule,
  ]
})
export class JsondataModule { }
