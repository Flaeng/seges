import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';
import { RolesGuard } from './guards/roles.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { KommuneDetailsComponent } from './pages/kommune-details/kommune-details.component';
import { KommuneListComponent } from './pages/kommune-list/kommune-list.component';
import { GetKommuneResolver } from './resolves/get-kommune.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'kommuner',
    component: KommuneListComponent,
    canActivate: [
      IsAuthenticatedGuard,
    ]
  },
  {
    path: 'kommuner/:kode',
    component: KommuneDetailsComponent,
    resolve: { kommune: GetKommuneResolver },
    canActivate: [
      RolesGuard.hasRoles('user')
      // RolesGuard.hasRoles('useradmin')
      // RolesGuard.hasRoles(['useradmin', 'tekniskadmin'])
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
