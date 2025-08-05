import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { CreatecvComponent } from './createcv/createcv.component';
import { BuildComponent } from './build/build.component';
import { TabViewModule } from 'primeng/tabview';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileComponent } from './file/file.component';
import { ChipsModule } from 'primeng/chips';



@NgModule({
  declarations: [
    ResumeComponent,
    CreatecvComponent,
    BuildComponent,FileComponent
      ],
  imports: [
    CommonModule,
    ResumeRoutingModule,TabViewModule,FormsModule,ReactiveFormsModule,ChipsModule
  ]
})
export class ResumeModule { }
