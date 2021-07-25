import { Component, OnInit, Input } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { User } from '../User';

@Component({
  selector: 'app-subordinates',
  templateUrl: './subordinates.component.html',
  styleUrls: ['./subordinates.component.css']
})
export class SubordinatesComponent implements OnInit {

  @Input() user: User;
  
  users: User[] = []
  private apiUrl = "http://localhost:8080/manager/mysubordinates"
  
  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    console.log("subordinates comp")
    console.log(this.user)
    this.http.post<any>(this.apiUrl, this.user.first_name).subscribe( data => {
      this.users = data;
      console.log("subordinates comp my users")
      console.log(this.users);
     })
    }

}
