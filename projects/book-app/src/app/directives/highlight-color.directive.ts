import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightColor]'
})
export class HighlightColorDirective {


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  // Method to change the background color
  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  // Listen to the 'click' event to change the row's background color
  @HostListener('click') onClick() {
    this.resetBackgroundColor();
    this.changeBackgroundColor('red');  // Change to a light gray color when clicked
  }

  // Method to reset the background color (optional, if you want to reset the color)
  resetBackgroundColor() {
    // Get all <tr> elements within the parent <table>
    const trElements = this.el.nativeElement.querySelectorAll('tr');

    // Loop through each <tr> element and reset the background color
    trElements.forEach((tr: HTMLElement) => {
      const tds = tr.getElementsByTagName('td');  // Get all <td> child elements of <tr>
      for (let i = 0; i < tds.length; i++) {
        this.renderer.setStyle(tds[i], 'background-color', 'transparent');  // Reset background color
      }
    });
  }

}
