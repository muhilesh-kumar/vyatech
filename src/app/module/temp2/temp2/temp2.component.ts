import { Component, OnInit } from '@angular/core';
import { mustachePayload } from './mustache';

@Component({
  selector: 'app-temp2',
  templateUrl: './temp2.component.html',
  styleUrls: ['./temp2.component.scss']
})
export class Temp2Component implements OnInit {
  companyName!: string;
  gMail!: string;
  contactNumber!: string;
  address!: string;
  customerID!: string;
  image!: string;
  customerName!: string;
  customerEmail!: string;
  customerBilling!: string;
  currentDate!: string;
  BillDate!: string;
  totalAmount!: number;
  currency!: number;
  itemsTable!: string;
  totalQuantity!: number;
  terms: { name: string }[] = [];
  invoiceNO!: string;

  constructor() { }

  ngOnInit(): void {
    Object.assign(this, mustachePayload);
  }
}
