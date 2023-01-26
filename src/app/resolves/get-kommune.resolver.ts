import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { firstValueFrom, map, Observable } from 'rxjs';
import { Kommune } from '../models/kommune';
import { DawaService } from '../services/dawa.service';

@Injectable({
  providedIn: 'root',
})
export class GetKommuneResolver implements Resolve<Kommune | undefined> {
  constructor(private dawaService: DawaService) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<Kommune | undefined> {
    const arr = await firstValueFrom(this.
      dawaService.kommuner$);
    return arr.filter((x) =>
      x.kode === route.paramMap
        .get('kode')).at(0);
  }

  // resolve(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<Kommune | undefined> {

  // return this.dawaService.kommuner$.pipe(
  //   map(arr => {
  //     return arr.filter(
  //       x => x.kode ===
  //         route.paramMap.get('kode')).at(0);
  //   })
  // );
  // }
}
