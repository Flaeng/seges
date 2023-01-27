import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';
import { RolesGuard } from './guards/roles.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FindAdresseComponent } from './pages/find-adresse/find-adresse.component';
import { KommuneComponent } from './pages/find-adresse/kommune/kommune.component';
import { RegionComponent } from './pages/find-adresse/region/region.component';
import { KommuneCrudComponent } from './pages/kommune-crud/kommune-crud.component';
import { KommuneDetailsComponent } from './pages/kommune-details/kommune-details.component';
import { KommuneListComponent } from './pages/kommune-list/kommune-list.component';
import { RegionCrudComponent } from './pages/region-crud/region-crud.component';
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
    path: 'kommuner/create',
    component: KommuneCrudComponent,
  },
  {
    path: 'regioner/create',
    component: RegionCrudComponent,
  },
  {
    path: 'find-adresse',
    redirectTo: 'find-adresse/region'
  },
  {
    path: 'find-adresse',
    component: FindAdresseComponent,
    children: [
      {
        path: 'region',
        component: RegionComponent
      },
      {
        path: 'kommune',
        component: KommuneComponent
      }
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
  },
  {
    path: 'regioner',
    loadChildren: () =>
      import('./regioner/regioner.module')
        .then(x => x.RegionerModule)
      // x => x.RegionerModule
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
