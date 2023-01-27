import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionerListComponent } from './pages/regioner-list/regioner-list.component';

const routes: Routes = [
  {
    path: '',
    component: RegionerListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionerRoutingModule { }
