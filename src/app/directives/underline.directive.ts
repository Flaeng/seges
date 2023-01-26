import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Kommune } from '../models/kommune';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective implements OnChanges {
  @Input()
  appUnderline: Kommune | null = null;
// <app-navigation [source]="kommuner$ | async" appUnderline>

  constructor(private elem: ElementRef<HTMLElement>) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.appUnderline) return;
    const element = this.elem.nativeElement;
    element.style.textDecoration =
      Number(this.appUnderline.kode) % 2 === 0
      ? 'underline'
      : '';
  }
}
