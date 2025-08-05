import { Component, OnInit } from '@angular/core';
import { mustachePayload } from './mustache'; 
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
data = mustachePayload;

  constructor() { }

  ngOnInit(): void { 
  }
}
