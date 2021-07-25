import { Component } from '@angular/core';
import {HttpClient, JsonpClientBackend} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'BusinessManagement';
  constructor(private http:HttpClient, private route: Router) { }


}
