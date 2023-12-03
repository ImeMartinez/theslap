import { Injectable } from "@angular/core";
import { Post } from "../interfaces/post.interface";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({providedIn: "root"})
export class postsService {

  constructor(private http : HttpClient){}

  postSomething(post : Post): Observable <any> {

    return this.http.post("http://localhost:8081/api/posts",post);
      
  }
  
    

}