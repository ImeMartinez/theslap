import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-collapse',
  templateUrl: './post-collapse.component.html',
  styleUrls: ['./post-collapse.component.css']
})
export class PostCollapseComponent {

  emojiSelected: any = {
    id: 'smiley',
    name: 'Smiling Face with Open Mouth',
    colons: ':smiley:',
    text: ':)',
    emoticons: [
      '=)',
      '=-)'
    ],
    skin: null,
    native: '😃'
  }
  showEmojis: boolean = false;
  email:string = "";
  
  constructor( private usersService: UsersService) {
    const token = localStorage.getItem('Authorization');
    if(token){
      this.email = JSON.parse(atob(token.split('.')[1])).id
    }
    else{
      return;
    }
    this.getUserData();

  }

  public get currentUserData():User{
    return this.usersService.currentUserData;
  }

  getUserData(): void {
    this.usersService.getUserData(this.email).subscribe({
      next: (response: any) => {
        this.usersService.currentUserData = response.user;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


  handleShowEmojis() {
    this.showEmojis = !this.showEmojis;
  }

  handleEmojiSelect(event: any) {
    this.emojiSelected = event.emoji;
  }
}
