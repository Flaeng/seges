import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { PrefixedWithZero } from '../validators/prefixed-with-zero';

@Directive({
  selector: '[appPrefixWithZero]',
  providers: [{provide: NG_VALIDATORS,
    useExisting: PrefixWithZeroDirective, multi: true}]
})
export class PrefixWithZeroDirective implements Validator {
// eller implements AsyncValidator hvis APIet skal spørges
  @Input()
  appPrefixWithZero: string = '';

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return PrefixedWithZero(this.appPrefixWithZero)(control);
  }

  // Får en metode tilbage der kan kaldes for at trigger de andre valideringsregler
  registerOnValidatorChange?(fn: () => void): void { }
}
