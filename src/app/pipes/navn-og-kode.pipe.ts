import { Pipe, PipeTransform } from '@angular/core';
import { Kommune } from '../models/kommune';

@Pipe({
  name: 'navnOgKode'
})
export class NavnOgKodePipe implements PipeTransform {

  transform(value: Kommune | null, ...args: unknown[]): string {
    if (!value) return '';
    return `${value.navn} (${value.kode})`;
  }

}
