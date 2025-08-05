import { Component, OnInit } from '@angular/core';
import { mustachePayload, IMustachePayload } from '../../../mustache-payload';



@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  Math = Math;
 data: IMustachePayload = mustachePayload;

  constructor() {}

  ngOnInit(): void {
    
  }

calculateAverage(): void {
  if (this.data.reviewMetrics && this.data.reviewMetrics.length > 0) {
    const sum = this.data.reviewMetrics.reduce((total, metric) => total + metric.rating, 0);
    this.data.averageRate = parseFloat((sum / this.data.reviewMetrics.length).toFixed(1));
  }
}

}