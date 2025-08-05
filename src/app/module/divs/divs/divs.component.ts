import { Component, OnInit } from '@angular/core';
import { mustachePayload } from './mustache'; 

@Component({
  selector: 'app-divs',
  templateUrl: './divs.component.html',
  styleUrls: ['./divs.component.scss']
})
export class DivsComponent implements OnInit {
  data = mustachePayload;

  constructor() {}

  ngOnInit(): void {}

  getCardValue(key: string): string {
    return this.data[key] || '';
  }
}
