import { Component } from '@angular/core';
import { postsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/user.service';
import { Post } from 'src/app/interfaces/post.interface';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-the-new-stuff',
  templateUrl: './the-new-stuff.component.html',
  styleUrls: ['./the-new-stuff.component.css']
})
export class TheNewStuffComponent {
  posts = []
  public currentUser= "";

  constructor(private postsService: postsService, private userService: UsersService) { 
    const token = localStorage.getItem('Authorization');
    if(!token){
      return;
    }
    const tokenData = JSON.parse(atob(token.split('.')[1]));
    this.currentUser = tokenData.id;

    this.getFollowingPosts();
  }

  public get userPosts(): Post[] {
    return this.postsService.userPosts;
  }


  getFollowingPosts() {
    this.postsService.getFollowingPosts(this.currentUser).subscribe({
      next: (response: any) => {
        this.postsService.userPosts = response.post;
        const users = response.post.map((post: Post) => post.user);
        this.getUsersData(users);
      },
      error: (error) => {
        console.log(error);
      }
    });
      
  }

  getUsersData(users:String[]) {
    this.userService.getUsersData(users).subscribe({
      next: (response: any) => {
        console.log(response.users);
        this.userService.users = response.users;
      },
      error: (error:any) => {
        console.log(error);
      }
    });
  }

  giveMeUser(email: string): any {
    return this.userService.users.find((user: User) => user.email === email);
  }
  

}
