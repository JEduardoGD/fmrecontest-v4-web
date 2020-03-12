import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContestologsComponent } from './contestologs.component';
import { ConteosRoutingModule } from '../conteos/conteos-routing.module';
import { PageHeaderModule } from 'src/app/shared';
import { ContestologsRoutingModule } from './contestologs-routing.module';

@NgModule({
  declarations: [ContestologsComponent],
  imports: [
    CommonModule,
    ContestologsRoutingModule,
    PageHeaderModule
  ],
  providers: [
  ]
})
export class ContestologsModule { }
