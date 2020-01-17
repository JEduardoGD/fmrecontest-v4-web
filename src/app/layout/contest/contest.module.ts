import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestRoutingModule } from './contest-routing.module';

import { ContestComponent } from './contest.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  declarations: [ContestComponent],
  imports: [
    CommonModule,
    ContestRoutingModule,
    PageHeaderModule
  ]
})
export class ContestModule { }
