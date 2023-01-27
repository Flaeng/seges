import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Region } from 'src/app/models/region';

@Component({
  selector: 'app-region-crud',
  templateUrl: './region-crud.component.html',
  styleUrls: ['./region-crud.component.scss']
})
export class RegionCrudComponent {

  region: Region | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.region = { kode: '', navn: '' } as Region;
  }

  navigateToList(): void {
    this.router.navigateByUrl('/regioner')
  }
}
