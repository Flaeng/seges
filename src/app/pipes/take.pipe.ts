import { Pipe, PipeTransform } from '@angular/core';
import { Kommune } from '../models/kommune';

@Pipe({
  name: 'take'
})
export class TakePipe implements PipeTransform {

  transform(value: Kommune[] | null, index: number, ...args: unknown[]): Kommune | null {
    if (!value) return null;
    if (value.length < index) return null;
    return value.at(index) ?? null;
    // Alternativt: return value[index];
  }

}
