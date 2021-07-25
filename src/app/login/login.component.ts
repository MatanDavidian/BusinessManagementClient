import { Component, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UserService} from './../user.service'
import { ActivatedRoute } from '@angular/router';
import { User } from '../User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  private apiUrl = "http://localhost:8080/user/all"
  users: User[] = []

  constructor(private http:HttpClient, private routes: Router, private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.http.get<any>(this.apiUrl).subscribe( data => {
      this.users = data;
      console.log(this.users)
     })
     
     console.log(UserService.user);
  }
}
