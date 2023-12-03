import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent {
  islogged = false;
  constructor() {
    if (localStorage.getItem('Authorization')) {
      this.islogged = true;
    }
    else {
      this.islogged = false;
    }
  }

}
