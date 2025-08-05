import { Component, OnInit } from '@angular/core';
import { mustachePayload } from './mustache'; 

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
data = mustachePayload;
userName= "Mahesh";
  status = 'System Updates in Progress';
  time = '10:00 AM';
  date = 'July 15, 2024';
  email = 'support@gmail.com';
  name = 'Ramesh';
  position = 'Developer';
  companyName = 'Vyasaka Technologies';

  constructor() { }

  ngOnInit(): void {
  }

}
