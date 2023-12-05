import { Injectable} from "@angular/core";
import { User } from "../interfaces/user.interface";
import { HttpClient } from "@angular/common/http";
import { Observable, map, of } from "rxjs";

@Injectable({providedIn: "root"})
export class UsersService {

  public users: User[] = [];
  public hotUsers: User[] = [];
  public followingUsers: {follower:String, following: String}[] = [];

  public currentUserData:User = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    image: "",
  };

  public currentUserLogged:User = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    image: "",
  };

  public currentUserPosts: any[] = [];


  constructor(private http : HttpClient){}

  getUsers(searchTerm:string): Observable <any> {
    return this.http.get(`http://localhost:8081/api/users?searchTerm=${searchTerm}`);
  }

  getHotUsers(): Observable <any> {
    return this.http.get("http://localhost:8081/api/users/hot");
  }

  registerUser(user : User): Observable <any> {

    
    return this.http.post("http://localhost:8081/api/users",user);
  }
  
  checkUserExists(email: string): Observable <boolean> {

    return this.http.get(`http://localhost:8081/api/users/${email}`).pipe(map((response: any) => {
      console.log(response)
      if(response.user)
        return true;
      else
        return false;
    }));
      
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

  getUserData(email:string): Observable <any> {
    return this.http.get(`http://localhost:8081/api/users/${email}`);
  }

  deleteUser(email:string): Observable <any> {
    return this.http.delete(`http://localhost:8081/api/users/${email}`);
  }

  getUsersData(users:String[]): Observable <any> {
    console.log(users);
    return this.http.get(`http://localhost:8081/api/users/data?users=${users}`);
  }
    

}