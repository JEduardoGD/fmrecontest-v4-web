import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailsComponent } from './emails.component';
import { PageHeaderModule } from 'src/app/shared';
import { EmailsRoutingModule } from './emails-routing.module';

@NgModule({
  declarations: [EmailsComponent],
  imports: [
    CommonModule,
    EmailsRoutingModule,
    PageHeaderModule
  ]
})
export class EmailsModule { }
