import { Component, OnInit } from '@angular/core';
import {UserService} from './../user.service'
import { User } from '../User';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  user: User = {};
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    console.log("main page");
    console.log(this.user);
    /*
    this.userService.getUsers().subscribe( (user) => this.user= user);
    console.log("main page");
    console.log(this.userService.getUsers());
    console.log(this.user);
    */
  }

}
