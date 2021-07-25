import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Task';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { User } from '../User';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  providers: [DatePipe]
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Input() user: User;
  private my_tasks: Task;
  myDate = new Date();



  
  constructor(private http:HttpClient, private modalService: NgbModal, private datePipe: DatePipe) {}

  ngOnInit(): void {
  }


  

}
