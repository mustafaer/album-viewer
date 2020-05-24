import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DashboardLayoutComponent} from './shared/layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardLayoutComponent,
    children: [
      {
        path: '', component: DashboardComponent, pathMatch: 'full'
      },
    ]
  },
  {
    path: '**', redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
