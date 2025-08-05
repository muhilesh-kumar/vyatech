import { Component } from '@angular/core';

import { mustachePayload, IMustachePayload} from './mustache';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html'
})
export class TempComponent {
  data: IMustachePayload = mustachePayload;
  
}