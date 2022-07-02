import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderBox]'
})
export class BorderBoxDirective {
  bordercolor:string='green'
  @Input() hoverColor:string='red'
  @Input('appBorderBox') default:string='darkgreen'
  constructor(private Elm:ElementRef) { 
    // this.Elm.nativeElement.style=`width: 6rem;background: ${this.default};`
  }
  @HostListener('mouseover')  onMouseover() {
    this.Elm.nativeElement.style=`width: 6rem;box-shadow: 10px 10px #888888;border-radius:5px;`
  }
  @HostListener('mouseout')  onMouseout() {
    this.Elm.nativeElement.style=`width: 6rem;box-shadow: 3px 5px #888888;border-radius:5px;`
  }
}
