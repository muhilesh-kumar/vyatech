import { Component, OnInit } from '@angular/core';
import { mustachePayload } from './mustache'; 

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {
data = mustachePayload;

  constructor() { }

  ngOnInit(): void {
  } 
}
