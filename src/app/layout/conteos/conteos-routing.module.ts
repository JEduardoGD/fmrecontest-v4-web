import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConteosComponent } from './conteos.component';

const routes: Routes = [
  { path: '', component: ConteosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConteosRoutingModule { }
