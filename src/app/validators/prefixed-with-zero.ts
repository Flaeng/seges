import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
// eller : AsyncValidatorFn hvis APIet skal spørges
export function PrefixedWithZero(prefix: string): ValidatorFn {
  return (ctrl: AbstractControl): ValidationErrors | null => {
    const valid = ctrl.value != null
      && ctrl.value.toString().indexOf(prefix) === 0;
    if (valid) {
      return null;
    }
    return { prefixedwithzero: { value: ctrl.value } };
  }
}
