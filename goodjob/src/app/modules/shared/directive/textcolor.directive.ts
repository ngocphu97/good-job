import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextcolor]'
})
export class TextcolorDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

// tslint:disable-next-line: no-input-rename
  @Input('appTextcolor') textColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.textColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
