import { Component, OnInit, Input } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Task } from '../Task';
import { User } from '../User';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() user: User;
  
  tasks: Task[] = []
  private apiUrl = "http://localhost:8080/task/getmy"
  
  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    console.log("tasks comp")
    console.log(this.user)
    this.http.post<any>(this.apiUrl, this.user.first_name).subscribe( data => {
      this.tasks = data;
      console.log(this.tasks);
     })
    }
}
