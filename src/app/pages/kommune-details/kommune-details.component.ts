import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Kommune } from 'src/app/models/kommune';

@Component({
  selector: 'app-kommune-details',
  templateUrl: './kommune-details.component.html',
  styleUrls: ['./kommune-details.component.scss']
})
export class KommuneDetailsComponent implements OnInit {

  kommune: Kommune | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.kommune = this.route.snapshot
      .data['kommune'] as Kommune;
  }

}
