import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-hot-pages',
  templateUrl: './hot-pages.component.html',
  styleUrls: ['./hot-pages.component.css']
})
export class HotPagesComponent {

  constructor( private usersService: UsersService) {
    this.getHotUsers();
  }

  public get hotUsers():User[]{
    return this.usersService.hotUsers;
  }

  getHotUsers():void{
    this.usersService.getHotUsers().subscribe({
      next: (response: any) => {
        this.usersService.hotUsers = response.usersList;
      },
      error: (error) => {
        console.log(error);
      }
    });
  };

  visitProfile(profile:String){
    window.location.href = '/profile/'+profile;
  }
}

