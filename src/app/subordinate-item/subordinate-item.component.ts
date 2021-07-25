import { Component, OnInit, Input} from '@angular/core';
import { User } from '../User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Task } from '../Task';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-subordinate-item',
  templateUrl: './subordinate-item.component.html',
  styleUrls: ['./subordinate-item.component.css'],
  providers: [DatePipe]
})
export class SubordinateItemComponent implements OnInit {
  @Input() user: User;
  @Input('ngModel')
  tasks: Task[] = []
  private apiUrl = "http://localhost:8080/task/add"
  closeResult: string;
  private my_task: Task;
  myDate = new Date();

  constructor(private http:HttpClient, private modalService: NgbModal, private datePipe: DatePipe) {}

  ngOnInit(): void {
    console.log("task comp")
    console.log(this.user)
    }

  sendTask(tasktVal: string,dueDate: string){

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    console.log("send task")
    console.log(tasktVal)
    var date = this.myDate.toLocaleDateString();

    console.log(date)

    this.my_task = {from:this.user.manager, to:this.user.first_name, ass_date:date,due_date:dueDate,text:tasktVal}

    console.log(this.my_task)
    //this.http.post<Report>(this.apiUrl, JSON.stringify({}), httpOptions)
    this.http.post<Task>(this.apiUrl, JSON.stringify(this.my_task), httpOptions).subscribe( data => {
      console.log(data)
     });
    this.modalService.dismissAll();
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
