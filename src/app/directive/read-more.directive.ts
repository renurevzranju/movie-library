import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReadMore]'
})
export class ReadMoreDirective implements AfterViewInit {
  readMore: boolean = false;
  fullContent: string = "";
  @Input() letterCount!: number;

  constructor(private el: ElementRef, private _renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.fullContent = this.el.nativeElement.textContent;
    if(this.fullContent.length > this.letterCount) {
      this.render();
    }
  }

  readMoreClicked(e: Event) {
    this.readMore = !this.readMore;
    const removableChild = document.getElementsByClassName("read-more")[0];
    if (removableChild) {
      this.el.nativeElement.removeChild(removableChild);
    }
    this.render();
  }

  render() {
    const span = this._renderer.createElement("span");
    const text = this._renderer.createText(this.readMore ? "Read Less" : "Read More");
    this._renderer.appendChild(span, text);
    this._renderer.addClass(span, "readMore-style")
    this._renderer.listen(span, "click", (e) => {
      this.readMoreClicked(e);
    });
    this._renderer.addClass(span, "read-more");
    if(!this.readMore) {
      this.el.nativeElement.textContent = `${this.fullContent.substring(0, this.letterCount)}...`;
    }else{
      this.el.nativeElement.textContent = this.fullContent;
    }
    this._renderer.appendChild(this.el.nativeElement, span);
  }

}
