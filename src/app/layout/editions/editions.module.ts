import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditionsComponent } from './editions.component';
import { PageHeaderModule } from 'src/app/shared';
import { EditionsRoutingModule } from './editions-routing.module';

@NgModule({
  declarations: [EditionsComponent],
  imports: [
    CommonModule,
    EditionsRoutingModule,
    PageHeaderModule
  ]
})
export class EditionsModule { }
