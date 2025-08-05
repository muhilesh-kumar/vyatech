import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseComponent } from './expense/expense.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Removed Validators from here
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    ExpenseComponent
  ],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ImageModule,
    ToastrModule.forRoot(), // Added .forRoot() for ToastrModule
    ConfirmDialogModule,
    PaginatorModule
    // Removed Validators from imports array
  ],
  providers: [
    ConfirmationService
  ]
})
export class ExpenseModule { }