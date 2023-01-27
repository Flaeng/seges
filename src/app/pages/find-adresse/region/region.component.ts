import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Region } from 'src/app/models/region';
import { FindAdresseComponent } from '../find-adresse.component';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent {

  constructor(
    @Inject(FindAdresseComponent)
    private findAdresseComponent: FindAdresseComponent,
    private router: Router
  ) { }

  selectRegion(reg: Region): void {
    this.findAdresseComponent.selectRegion(reg);
  }

}
