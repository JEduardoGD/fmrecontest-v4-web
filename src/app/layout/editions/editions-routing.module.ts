import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditionsComponent } from './editions.component';

const routes: Routes = [
  { path: 'bycontestid/:contestid', component: EditionsComponent }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditionsRoutingModule { }
