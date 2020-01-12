import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestRoutingModule } from './contest-routing.module';

import { ContestComponent } from './contest.component';
import { PageHeaderModule } from './../../shared';

import { DataTableModule } from 'ng-angular8-datatable';

@NgModule({
  declarations: [ContestComponent],
  imports: [
    CommonModule,
    ContestRoutingModule,
    PageHeaderModule,
    DataTableModule
  ]
})
export class ContestModule { }
