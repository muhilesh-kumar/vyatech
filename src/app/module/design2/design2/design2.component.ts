import { Component, OnInit } from '@angular/core';
import { mustachePayload, IMustachePayload} from './mustache';
@Component({
  selector: 'app-design2',
  templateUrl: './design2.component.html',
  styleUrls: ['./design2.component.scss']
})
export class Design2Component implements OnInit {
data: IMustachePayload = mustachePayload;
  constructor() { }

  ngOnInit(): void {
  }

}
