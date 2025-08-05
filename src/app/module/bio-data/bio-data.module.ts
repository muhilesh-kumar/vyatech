import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BioDataRoutingModule } from './bio-data-routing.module';
import { DetailsComponent } from './details/details.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    DetailsComponent
  ], 
  imports: [
    CommonModule,
    BioDataRoutingModule,DialogModule,ReactiveFormsModule,FormsModule,ConfirmDialogModule,TabViewModule, TableModule,ButtonModule,RippleModule,
    PaginatorModule,
  ],
  providers: [
    ConfirmationService
  ]
})
export class BioDataModule { }
