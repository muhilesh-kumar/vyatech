import { Component, OnInit } from '@angular/core';

 
@Component({
  selector: 'app-reply2',
  templateUrl: './reply2.component.html',
  styleUrls: ['./reply2.component.scss']
})
export class Reply2Component implements OnInit {
  constructor() { }
  userName = 'Mahesh';
  email = 'support@gmail.com';
  name= 'Ramesh';
  position = 'Developer';
  companyName = 'Vyasaka Technologies';

  ngOnInit(): void {
  }

}