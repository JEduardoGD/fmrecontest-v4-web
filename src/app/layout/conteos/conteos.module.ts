import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConteosRoutingModule } from './conteos-routing.module';
import { ConteosComponent } from './conteos.component';
import { PageHeaderModule } from 'src/app/shared';
import { ConteoService } from 'src/app/services/conteo.service';
import { ReportsService } from 'src/app/services/reports.service';

@NgModule({
  declarations: [ConteosComponent],
  imports: [
    CommonModule,
    ConteosRoutingModule,
    PageHeaderModule
  ],
  providers: [
    ConteoService,
    ReportsService,
  ]
})
export class ConteosModule { }
