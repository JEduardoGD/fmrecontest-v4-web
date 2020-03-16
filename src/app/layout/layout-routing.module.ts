import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'contest', loadChildren: () => import('./contest/contest.module').then(m => m.ContestModule) },
            { path: 'editions', loadChildren: () => import('./editions/editions.module').then(m => m.EditionsModule) },
            { path: 'emails', loadChildren: () => import('./emails/emails.module').then(m => m.EmailsModule) },
            { path: 'conteos', loadChildren: () => import('./conteos/conteos.module').then(m => m.ConteosModule) },
            { path: 'contestlogs', loadChildren: () => import('./contestologs/contestologs.module').then(m => m.ContestologsModule) },
            { path: 'qsos', loadChildren: () => import('./qsos/qsos.module').then(m => m.QsosModule) },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
            { path: 'bs-element', loadChildren: () => import('./bs-element/bs-element.module').then(m => m.BsElementModule) },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
            { path: 'components', loadChildren: () => import('./bs-component/bs-component.module').then(m => m.BsComponentModule) },
            { path: 'blank-page', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
