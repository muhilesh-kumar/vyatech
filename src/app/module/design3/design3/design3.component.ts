import { Component, OnInit } from '@angular/core';
import { mustachePayload, IMustachePayload} from './mustache';
@Component({
  selector: 'app-design3',
  templateUrl: './design3.component.html',
  styleUrls: ['./design3.component.scss']
})
export class Design3Component implements OnInit {
data: IMustachePayload = mustachePayload;
  constructor() { }

  ngOnInit(): void {
  }

}
