import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
})
export class HomePage {
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
