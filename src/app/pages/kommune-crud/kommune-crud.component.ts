import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kommune } from 'src/app/models/kommune';

@Component({
  selector: 'app-kommune-crud',
  templateUrl: './kommune-crud.component.html',
  styleUrls: ['./kommune-crud.component.scss']
})
export class KommuneCrudComponent implements OnInit {

  kommune: Kommune | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.kommune = { kode: '', navn: '' } as Kommune;
  }

  navigateToList(): void {
    this.router.navigateByUrl('/kommuner')
  }
}
