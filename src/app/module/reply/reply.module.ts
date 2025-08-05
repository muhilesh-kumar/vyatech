import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReplyRoutingModule } from './reply-routing.module';
import { ReplyComponent } from './reply/reply.component';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    ReplyComponent
  ],
  imports: [
    CommonModule,
    ReplyRoutingModule, DialogModule
  ]
})
export class ReplyModule { }
