import { Component, OnInit } from '@angular/core';

export interface Product {
  name: string;
  quantity: number;
  price: number;
}
@Component({
  selector: 'app-order2',
  templateUrl: './order2.component.html',
  styleUrls: ['./order2.component.scss']
})

export class Order2Component implements OnInit {
userName= 'Mahesh';
orderNo = '123456';
orderDate = '2023-10-01';
delivery = '2023-10-05';
 products: Product[] = [
    { name: 'Product A', quantity: 2, price: 100 },
    { name: 'Product B', quantity: 1, price: 250 },
    { name: 'Product C', quantity: 5, price: 75 }
  ];
subtotal = 425;
shipping = 50;
totalAmount = 475;
shippingStreet = '123 mgr Main st';
shippingCity = 'Chennai';
shippingState = 'Tamil Nadu';
shippingZip = '600001';
shippingCountry = 'India';
paymentMethod = 'Credit Card';
billingStreet = '456 mgr Main st';
billingCity = 'Chennai';
billingState = 'Tamil Nadu';
billingZip = '600001';
billingCountry = 'India';
billingName = 'Vyasaka Technologies';
companyEmail='support@gmail.com';
companyNumber = '1234567890';

  constructor() { }

  ngOnInit(): void {
  }

}
