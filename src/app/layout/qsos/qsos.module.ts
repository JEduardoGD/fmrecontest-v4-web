import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QsosComponent } from './qsos.component';
import { QsosRoutingModule } from './qsos-routing.module';
import { PageHeaderModule } from 'src/app/shared';
import { QsosService } from 'src/app/services/qsos.service';

@NgModule({
  declarations: [QsosComponent],
  imports: [
    CommonModule,
    QsosRoutingModule,
    PageHeaderModule
  ],
  providers: [
    QsosService
  ]
})
export class QsosModule { }
