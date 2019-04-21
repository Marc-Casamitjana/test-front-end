import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}
// import { Directive, ElementRef, Renderer2 } from '@angular/core';

// @Directive({ selector: '[progressBar]' })

// export class progressBar {
//   percentage: number;

//   constructor(elem: ElementRef) {
//     elem.nativeElement.style.width = this.percentage;
//   }
// }