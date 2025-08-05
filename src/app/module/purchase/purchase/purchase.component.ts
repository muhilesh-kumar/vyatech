import { Component, OnInit } from '@angular/core';
import { mustachePayload } from './mustache';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
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


  constructor() { }

  ngOnInit(): void {
    Object.assign(this, mustachePayload);
  }
}
