import { Component, OnInit } from '@angular/core';
import { mustachePayload } from './mustache-payload';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
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
