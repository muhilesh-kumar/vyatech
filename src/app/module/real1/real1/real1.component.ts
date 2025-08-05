import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real1',
  templateUrl: './real1.component.html',
  styleUrls: ['./real1.component.scss']
})
export class Real1Component implements OnInit {
  companyName= 'Vyasaka';
  companyType= 'Technologies';
  pvd = 'Pvt Ltd';
  companyLogo= 'https://dashboard.vedna.in/assets/logo/vedna.jpg';
  he = 'He';
  his = 'His';
  companyShort= 'Vyasaka Technologies';
  location= 'Chennai';
  reference= 'IN25/HR/I01 dated 08,May 25';
  name= 'Mr.Mohamed Salman';
  role= 'Project Intern';
  designation= "Master’s Project Internship Trainee";
  period= '23, Dec 24 to 03, May 25 (70 days)';
  responsibilities= 'Angular application development and integration';
  signName= 'Alex Mathews';
  signRole= 'HR Manager';
  address= 'Plot No 5179, Ram Nagar North Extn, 8th St, Puzhuthivakkam, Chennai - 600 091, TamilNadu, India';
  phone= '+91-789562900';
  email= 'hr@vyasaka.in';
  

  constructor() { }

  ngOnInit(): void {
  }


}
