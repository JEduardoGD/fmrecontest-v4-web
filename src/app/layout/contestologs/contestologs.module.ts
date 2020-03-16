import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContestologsComponent } from './contestologs.component';
import { PageHeaderModule } from 'src/app/shared';
import { ContestologsRoutingModule } from './contestologs-routing.module';
import { ContestlogService } from 'src/app/services/contestlog.service';

@NgModule({
  declarations: [ContestologsComponent],
  imports: [
    CommonModule,
    ContestologsRoutingModule,
    PageHeaderModule,
  ],
  providers: [
    ContestlogService
  ]
})
export class ContestologsModule { }
