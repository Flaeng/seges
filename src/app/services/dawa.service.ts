import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kommune } from '../models/kommune';

@Injectable({
  providedIn: 'root'
})
export class DawaService {

  kommuner$: Observable<Kommune[]>

  constructor(private httpClient: HttpClient) {
    this.kommuner$ = this.httpClient.get<Kommune[]>(
      'https://api.dataforsyningen.dk/kommuner');
  }


}
