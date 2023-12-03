import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  isLogged = false;
  searchTerm = "";
  constructor(private router: Router) {

    if (window.localStorage.getItem("Authorization")) {
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
   }

  public logout():void{
    window.localStorage.removeItem("Authorization");
    window.location.href = "/sign-in";
  }

  public profiles(isSearch:boolean):void{
    if(isSearch){
      if(this.isLogged)
      {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/profiles', this.searchTerm]);
      }
      else
        this.router.navigate(['/sign-in']);
    }
    else{
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/profiles', ""]);
    }
  }
}
