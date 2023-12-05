import { Injectable } from "@angular/core";
import { Post } from "../interfaces/post.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class postsService {

  public lastPost: Post = {
    user: "",
    body: "",
    feeling: "",
    emoji: {
      id: "",
    },
  
  };

  public userPosts: Post[] = [{
      user: "",
      body: "",
      feeling: "",
      emoji: {
        id: "",
      },
    }
  ];

  constructor(private http : HttpClient){}

  postSomething(post : Post): Observable <any> {

    return this.http.post("http://localhost:8081/api/posts",post);
      
  }

  getLastPost(): Observable <any> {
    return this.http.get("http://localhost:8081/api/posts/last");
  }
  

  getUserPosts(email: string): Observable <any> {
    return this.http.get(`http://localhost:8081/api/posts/${email}`);
  }

  deletePost(post:Post): Observable <any> {
    return this.http.delete(`http://localhost:8081/api/posts`, {body: post});
  }
  
  getFollowingPosts(email: string): Observable <any> {
    console.log(email);
    return this.http.get(`http://localhost:8081/api/posts/following/${email}`);
  }


}