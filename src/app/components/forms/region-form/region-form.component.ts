import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { Region } from 'src/app/models/region';
import { PrefixedWithZero } from 'src/app/validators/prefixed-with-zero';

export type RegionEvent = Event & { region: Region }

@Component({
  selector: 'app-region-form',
  templateUrl: './region-form.component.html',
  styleUrls: ['./region-form.component.scss']
})
export class RegionFormComponent {

  @Input()
  region: Region | null = null;

  form: FormGroup = this.fb.group({
    kode: this.fb.control<string>('', {
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        PrefixedWithZero('1'),
        // (): ValidationErrors | null => {
        //   this.region.
        // }
      ]
    }),
    navn: this.fb.control<string>('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]
    })
  });

  @Output()
  onSubmit: EventEmitter<RegionEvent>
    = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.patchValue(this.region ?? {});
  }

// export type RegionEvent = Event & { region: Region }
  save(ev: Event): void {
    if (!this.region) return;
    if (this.form.invalid) return;

    const event = {
      ...ev, region: this.form.value as Region
    } as RegionEvent;

    this.onSubmit.emit(event);
    alert('Success');
  }
}
