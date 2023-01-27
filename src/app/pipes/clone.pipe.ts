import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clone'
})
export class ClonePipe implements PipeTransform {

  transform<T>(value: T): T {
    return { ...value };
  }

}
