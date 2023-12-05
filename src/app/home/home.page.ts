import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
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
