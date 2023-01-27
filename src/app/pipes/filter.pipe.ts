import { Pipe, PipeTransform } from '@angular/core';
import { Kommune } from '../models/kommune';

interface INavnOgKode {
  kode: string;
  navn: string;
}
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: Kommune[] | Region[] | null, ...args: unknown[]): Kommune[] | Region[] | null {
  // transform(value: { kode: string, navn : string }[] | null, ...args: unknown[]): { kode: string, navn : string }[] {
  // transform<T extends INavnOgKode>(value: T[] | null, ...args: unknown[]): T[] {
  transform<T extends { kode: string, navn: string }>(
    value: T[] | null,
    term: string
  ): T[] {
    const searchTerm = term.toLowerCase();
    if (!value) return [];
    return value.filter(x => {
      return x.kode.toLowerCase()
          .indexOf(searchTerm) !== -1
        || x.navn.toLowerCase()
          .indexOf(searchTerm) !== -1;
    });
  }

}
