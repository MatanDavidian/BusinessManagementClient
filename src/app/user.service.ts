import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "http://localhost:8080/user/all"
  static user:User;
  constructor(private http:HttpClient) { }
  /*
  getUsers(): Observable<User>{
    return this.http.get<User>(this.apiUrl)
  }
  */
  getUser(): User{
    console.log("UserService get:")
    console.log(UserService.user)
    return UserService.user;
  }
  setUser(user: User){
    UserService.user = user;
    console.log("UserService set:")
    console.log(UserService.user)
  }
}