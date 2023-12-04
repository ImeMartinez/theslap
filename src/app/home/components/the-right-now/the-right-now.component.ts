import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/user.service';
import { Post } from 'src/app/interfaces/post.interface';
import { postsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-the-right-now',
  templateUrl: './the-right-now.component.html',
  styleUrls: ['./the-right-now.component.css']
})
export class TheRightNowComponent {

  constructor( private usersService: UsersService, private postsService: postsService) {
    this.getLastPost();
  }

  public get lastPost():Post{
    return this.postsService.lastPost;
  }

  public get currentUserData():User{
    return this.usersService.currentUserData;
  }

  getLastPost(): void {
    this.postsService.getLastPost().subscribe({
      next: (response: any) => {
        this.postsService.lastPost = response.post[0];
        this.getUserData();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getUserData(): void {
    console.log(this.lastPost.user);
    this.usersService.getUserData(this.lastPost.user).subscribe({
      next: (response: any) => {
        console.log(response);
        this.usersService.currentUserData = response.user;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
