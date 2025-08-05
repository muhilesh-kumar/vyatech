import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { CreatecvComponent } from './createcv/createcv.component';
import { BuildComponent } from './build/build.component';
import { FileComponent } from './file/file.component';



const routes: Routes = [{
  path: '', component: ResumeComponent
},
{ path: 'createcv', component: CreatecvComponent },
{ path: 'build', component: BuildComponent },
{ path: 'file' , component: FileComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }
