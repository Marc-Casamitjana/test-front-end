import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProgressBar]'
})
export class ProgressBarDirective {
  percentage: number;

  constructor(elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = 'yellow'
  }

}
