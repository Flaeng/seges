import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Kommune } from 'src/app/models/kommune';
import { Region } from 'src/app/models/region';

@Component({
  selector: 'app-find-adresse',
  templateUrl: './find-adresse.component.html',
  styleUrls: ['./find-adresse.component.scss']
})
export class FindAdresseComponent implements OnInit {

  kommune: Kommune | null = null;
  region: Region | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const regionJson = localStorage.getItem('selected_region');
    this.region = regionJson
      ? JSON.parse(regionJson) as Region
      : null;

    const kommuneJson = localStorage.getItem('selected_kommune');
    this.kommune = kommuneJson
      ? JSON.parse(kommuneJson) as Kommune
      : null;
  }

  selectRegion(reg: Region): void {
    this.region = reg;
    this.saveChanges();
    this.router.navigateByUrl('/find-adresse/kommune');
  }

  saveChanges(): void {
    const regionJson = JSON.stringify(this.region);
    localStorage.setItem(
      'selected_region',
      regionJson);

    const kommuneJson = JSON.stringify(this.kommune);
    localStorage.setItem(
      'selected_kommune',
      kommuneJson);
  }

  // DONT
  // get region(): Region | null {
  //   const json = localStorage.getItem('selected_region');
  //   return json ? JSON.parse(json) as Region : null;
  //   // JSON.stringify
  // }
  // set region(val: Region | null) {
  //   const json = JSON.stringify(val);
  //   localStorage.setItem('selected_region', json);
  // }






}
