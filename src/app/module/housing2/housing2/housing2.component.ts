import { Component, OnInit } from '@angular/core';
import { mustachePayload } from './mustache'; 
@Component({
  selector: 'app-housing2',
  templateUrl: './housing2.component.html',
  styleUrls: ['./housing2.component.scss']
})
export class Housing2Component implements OnInit {
data = mustachePayload;
  constructor() { }

  ngOnInit(): void {
  }

}
