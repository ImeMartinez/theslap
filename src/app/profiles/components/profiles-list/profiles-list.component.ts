import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/user.service';
@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent implements OnInit{

  public currentUser = "";
  public searchTerm = "";

  

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.params['searchTerm']
    this.getUsers();
  }

  constructor(private userService:UsersService, private route: ActivatedRoute)  { 
    const token = localStorage.getItem('Authorization');
    if(!token){
      return;
    }
    const tokenData = JSON.parse(atob(token.split('.')[1]));
    this.currentUser = tokenData.id;
  }


  public get users():User[]{
    return this.userService.users;
  }

  public get followingUsers():{follower:String, following: String}[]{
    return this.userService.followingUsers;
  }

  isFollowing(email: string): boolean{
    return this.followingUsers.some((user) => user.following === email);
  }

  getUsers():void{
    this.userService.getUsers(this.searchTerm).subscribe({
      next: (response: any) => {
        this.userService.users = response.usersList;
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
  }

  followUser(email: string): void{
    this.userService.followUser(this.currentUser, email).subscribe({
      next: (response: any) => {
        this.getUsers();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  unfollowUser(email: string): void{
    this.userService.unfollowUser(this.currentUser, email).subscribe({
      next: (response: any) => {
        this.getUsers();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
