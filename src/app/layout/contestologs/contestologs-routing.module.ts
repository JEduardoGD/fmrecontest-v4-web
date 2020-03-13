import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContestologsComponent } from './contestologs.component';

const routes: Routes = [
  { path: '', component: ContestologsComponent },
  { path: 'byconteoid/:conteoid', component: ContestologsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestologsRoutingModule { }
``