import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appThumnail]'
})
export class ThumnailDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
