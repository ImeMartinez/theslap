import { Injectable } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({providedIn: "root"})
export class UsersService {

  public users: User[] = [];
  public followingUsers: {follower:String, following: String}[] = [];


  constructor(private http : HttpClient){}

  getUsers(searchTerm:string): Observable <any> {
    return this.http.get(`http://localhost:8081/api/users?searchTerm=${searchTerm}`);
  }

  registerUser(user : User): Observable <any> {
    
    if(this.checkUserExists(user.email)){
      
      return of({error: "El correo que ingresaste ya está registrado. Intenta con otro."});
    }

    return this.http.post("http://localhost:8081/api/users",user);
      
  }
  
  private checkUserExists(email: string): boolean {
    let userExists = this.http.get(`http://localhost:8081/api/users/${email}`);
    if(userExists){
      return true;
    }
    else{
      return false;
    }
      
  }

  getFollowingUsers(userId: string): Observable <any> {
    return this.http.get(`http://localhost:8081/api/followers/${userId}`);
  }

  loginUser(user : {email: string, password: string}): Observable <any> {
    return this.http.post("http://localhost:8081/api/auth/login",user);
       
  }

  followUser(follower: string, following: string): Observable <any> {
    return this.http.post("http://localhost:8081/api/followers", {follower, following});
  }

  unfollowUser(follower: string, following: string): Observable <any> {
    return this.http.delete(`http://localhost:8081/api/followers/${follower}/${following}`);
  }
    

}