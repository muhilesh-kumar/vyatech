import { Component, OnInit } from '@angular/core';
import { mustachePayload } from './mustache'; 

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.scss']
})
export class HousingComponent implements OnInit {
data = mustachePayload;
  constructor() { }

  ngOnInit(): void {
  }

}
