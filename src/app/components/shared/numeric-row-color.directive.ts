import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appNumericRowColor]',
  standalone: true
})
export class NumericRowColorDirective implements OnChanges{

  @Input() appRowColor: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appRowColor']) {
      this.updateRowColor();
    }
  }

  private updateRowColor(): void {
    const value = this.appRowColor;

    if (value > 0) {
      this.renderer.addClass(this.el.nativeElement, 'positive-row');
    } else if (value < 0) {
      this.renderer.addClass(this.el.nativeElement, 'negative-row');
    }
  }
}
