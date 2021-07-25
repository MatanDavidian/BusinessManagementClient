import { Component, OnInit, Input } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import {UserService} from './../user.service'
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  constructor(private routes: Router, private userService: UserService) { }

  ngOnInit(): void {
  }
  onClick(user: User) {
    console.log(user);
    console.log('login click');
    this.routes.navigateByUrl('/mainpage');
    this.userService.setUser(user);
  }
}
