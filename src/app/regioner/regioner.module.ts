import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionerListComponent } from './pages/regioner-list/regioner-list.component';
import { RegionerRoutingModule } from './regioner-routing.module';

@NgModule({
  declarations: [
    RegionerListComponent
  ],
  imports: [
    CommonModule,
    RegionerRoutingModule
  ]
})
export class RegionerModule { }
// ng g m regioner
// ng g c regioner/componets/region-list
