import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConteosRoutingModule } from './conteos-routing.module';
import { ConteosComponent } from './conteos.component';

@NgModule({
  declarations: [ConteosComponent],
  imports: [
    CommonModule,
    ConteosRoutingModule
  ]
})
export class ConteosModule { }
