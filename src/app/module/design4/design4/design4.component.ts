import { Component, OnInit } from '@angular/core';
import { mustachePayload, IMustachePayload} from './mustache';
@Component({
  selector: 'app-design4',
  templateUrl: './design4.component.html',
  styleUrls: ['./design4.component.scss']
})
export class Design4Component implements OnInit {
data: IMustachePayload = mustachePayload;
  constructor() { }

  ngOnInit(): void {
  }

}
