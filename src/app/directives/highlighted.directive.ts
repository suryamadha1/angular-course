import { Directive, HostBinding, Output, HostListener, Input, EventEmitter } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  @Output()
  toggleHighlight = new EventEmitter()

  constructor() {
    console.log("Directive created..")
  }

  @HostBinding('class.highlighted')
  get cssClasses(){
    return this.isHighlighted;
  }

  @HostBinding('attr.disabled')
  get disabled(){
    return "true";
  }

  @HostListener('mouseover')
  mouseOver() {
    this.isHighlighted = true;
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.isHighlighted = false;
  }

  toggle(){
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted)
  }

}
