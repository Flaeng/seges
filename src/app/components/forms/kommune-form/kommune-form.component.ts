import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Kommune } from 'src/app/models/kommune';

export type KommuneEvent = Event & { kommune: Kommune };

@Component({
  selector: 'app-kommune-form',
  templateUrl: './kommune-form.component.html',
  styleUrls: ['./kommune-form.component.scss']
})
export class KommuneFormComponent {

  @Input()
  kommune: Kommune | null = null;

  @ViewChild('form')
  form: NgForm | null = null;

  @Output()
  onSubmit: EventEmitter<KommuneEvent>
    = new EventEmitter();

  save(ev: Event): void {
    if (!this.form || !this.kommune) return;
    if (this.form.invalid) return;
    // Lav en http request
    this.form.form.markAsPristine();
    // export type KommuneEvent = Event & { kommune: Kommune };
    this.onSubmit.emit({ ...ev, kommune: this.kommune });
    alert('Success');
  }

}
