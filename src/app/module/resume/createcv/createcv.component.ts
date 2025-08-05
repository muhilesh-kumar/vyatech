import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcv',
  templateUrl: './createcv.component.html',
  styleUrls: ['./createcv.component.scss']
})
export class CreatecvComponent implements OnInit {
  text: boolean = false;
  text1: boolean = false;
  extractedText: string = '';
  resumeSections: any = {};

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras.state;

    if (state) {
      this.extractedText = state['extractedText'] || '';
      this.resumeSections = state['resumeSections'] || {};
    }
  }

  ngOnInit(): void {
    console.log('Received Extracted Text:', this.extractedText);
    console.log('Received Resume Sections:', this.resumeSections);

    if (this.extractedText && Object.keys(this.resumeSections).length > 0) {
      this.text = true;   
    } else {
      this.text1 = true;  
    }
  }

  updatedtemplate(templateName: string) {
    this.router.navigate(['/resume/file'], {
      state: {
        template: templateName,
        extractedText: this.extractedText,
        resumeSections: this.resumeSections
      }
    });
  }

  selectTemplate(templateName: string) {
    this.router.navigate(['/resume/build'], {
      state: {
        template: templateName
      }
    });
  }
}
