import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Kommune } from 'src/app/models/kommune';
import { DawaService } from 'src/app/services/dawa.service';

@Component({
  selector: 'app-kommune-list',
  templateUrl: './kommune-list.component.html',
  styleUrls: ['./kommune-list.component.scss']
})
export class KommuneListComponent {

  kommuner$: Observable<Kommune[]> = this.dawaService.kommuner$;
  searchTerm: string = '';
  displayedColumns: string[] = ['kode', 'navn', 'detaljer'];

  constructor(private dawaService: DawaService) { }

  // async doStuff(): Promise<void> {
  //   const kommuner = await firstValueFrom(this.dawaService.kommuner$);
  // }
}
