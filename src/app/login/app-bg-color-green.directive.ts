import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppBgColorGreen]'
})
export class AppBgColorGreenDirective {

  constructor(private ef: ElementRef) { 
    console.log(ef);
    ef.nativeElement.style.backgroundColor = 'green';
    ef.nativeElement.style.fontSize = 'xx-large';
    ef.nativeElement.style.fontStyle = 'italic';
  }

}
