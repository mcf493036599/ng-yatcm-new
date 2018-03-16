import {Directive, HostListener, Input} from '@angular/core';
import {Router} from '@angular/router';

@Directive({
  selector: '[appViewPageById]'
})
export class ViewPageByIdDirective {
  @Input() idType: string;
  @Input() pageId: String;
  @HostListener('click') onClick() {
    switch (this.idType) {
      case 'herb': this.router.navigate(['herb', +(this.pageId)]); break;
      case 'prescription': this.router.navigate(['prescription', +(this.pageId)]); break;
      case 'compound': this.router.navigate(['compound', +(this.pageId)]); break;
      case 'pathway': this.router.navigate(['pathway', +(this.pageId)]); break;
    }
  }

  constructor(private router: Router) {

  }
}