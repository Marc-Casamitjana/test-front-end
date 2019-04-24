import { Directive, ElementRef, Renderer2, OnInit, Input, AfterViewInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Directive({
  selector: '[appProgressBar]'
})
export class ProgressBarDirective implements AfterViewInit {


  @Input() value: string;

  constructor(
    private elem: ElementRef, 
    private renderer: Renderer2) {}

  ngAfterViewInit() {
      this.renderer.setAttribute(this.elem.nativeElement, 'style', `width:${this.value}px`);
    }
}
