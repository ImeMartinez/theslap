import { Injectable } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class UsersService {

    constructor(private http : HttpClient){
      window.localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNzAxNDA0MjU0LCJleHAiOjE3MDE0MTg2NTR9.64KrhrTUg0Z_akLSeCMHBWjUxnan06Jx4CRCcim73-4");
    }

    registerUser(user : User): Observable <any> {
      return this.http.post("http://localhost:8081/api/users",user);
      
    }
    

}