import { Component, OnInit } from '@angular/core';
import { mustachePayload, IMustachePayload} from './mustache';
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
data: IMustachePayload = mustachePayload;
  constructor() { }

  ngOnInit(): void {
  }

}
