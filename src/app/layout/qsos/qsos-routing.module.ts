import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QsosComponent } from './qsos.component';

const routes: Routes = [
  { path: '', component: QsosComponent },
  { path: 'byconteoid/:conteoid/logid/:logid', component: QsosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QsosRoutingModule { }
