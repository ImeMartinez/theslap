import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/user.service';
import { Post } from 'src/app/interfaces/post.interface';
import { postsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-profile-edition',
  templateUrl: './profile-edition.component.html',
  styleUrls: ['./profile-edition.component.css']
})
export class ProfileEditionComponent {
  public currentUser = "";
  public profileUser = "";

  ngOnInit(): void {
    this.profileUser = this.route.snapshot.params['email']
    this.getUserData(this.profileUser);
  }

  constructor(private userService:UsersService, private route: ActivatedRoute, private postService: postsService)  { 
    const token = localStorage.getItem('Authorization');
    if(!token){
      return;
    }
    const tokenData = JSON.parse(atob(token.split('.')[1]));
    this.currentUser = tokenData.id;
  }

  public get profileUserData():User{
    return this.userService.currentUserData;
  }

  public get followingUsers():{follower:String, following: String}[]{
    return this.userService.followingUsers;
  }

  public get userPosts():Post[]{
    return this.postService.userPosts;
  }

  public getUserData(email:string):void{
    this.userService.getUserData(email).subscribe({
      next: (response: any) => {
        console.log(response);
        this.userService.currentUserData = response.user;
      },
      error: (error) => {
        console.log(error);
      }
    });

    this.userService.getFollowingUsers(this.currentUser).subscribe({
      next: (response: any) => {
        this.userService.followingUsers = response.follows;
      },
      error: (error) => {
        console.log(error);
      }
    });

    this.getUserPosts();
  }

  followUser(email: string): void{
    this.userService.followUser(this.currentUser, email).subscribe({
      next: (response: any) => {
        this.getUserData(this.profileUser);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  isFollowing(email: string): boolean{
    return this.followingUsers.some((user) => user.following === email);
  }

  unfollowUser(email: string): void{
    this.userService.unfollowUser(this.currentUser, email).subscribe({
      next: (response: any) => {
        this.getUserData(this.profileUser);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getUserPosts():void{
    this.postService.getUserPosts(this.profileUser).subscribe({
      next: (response: any) => {
        console.log(response);
        this.postService.userPosts = response.post;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


}