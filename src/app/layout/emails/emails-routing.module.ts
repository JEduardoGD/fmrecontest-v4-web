import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailsComponent } from './emails.component';

const routes: Routes = [
  { path: 'byeditionid/:editionid', component: EmailsComponent }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailsRoutingModule { }
