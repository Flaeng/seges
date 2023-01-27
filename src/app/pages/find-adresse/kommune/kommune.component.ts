import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Region } from 'src/app/models/region';
import { FindAdresseComponent } from '../find-adresse.component';

@Component({
  selector: 'app-kommune',
  templateUrl: './kommune.component.html',
  styleUrls: ['./kommune.component.scss']
})
export class KommuneComponent implements OnInit {

  region: Region | null = null;
  constructor(
    @Inject(FindAdresseComponent)
    private findAdresseComponent: FindAdresseComponent,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.findAdresseComponent.region) {
      this.router.navigateByUrl('find-adresse/region');
      return;
    }
    this.region = this.findAdresseComponent.region;
  }

}
