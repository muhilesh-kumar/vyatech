import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit {
  private template: string = '';

  constructor(private router:Router) {
    const navigation = this.router.getCurrentNavigation();
    this.template = navigation?.extras.state?.['template'] || '';
   }

  ngOnInit(): void {
  }
  new() {
    this.router.navigate(['/resume/file'], { 
      state: { template: this.template }
    });
    
  }
  new1() {
    this.router.navigate(['/resume/'],  { queryParams: { triggerUpload: 'true' } });
    
  }
}
