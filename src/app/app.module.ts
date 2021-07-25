import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; // CLI imports 

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TasksComponent } from './tasks/tasks.component';
import { ReportsComponent } from './reports/reports.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { UserComponent } from './user/user.component';
import { SubordinatesComponent } from './subordinates/subordinates.component';
import { SubordinateItemComponent } from './subordinate-item/subordinate-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpageComponent,
    TasksComponent,
    ReportsComponent,
    TaskItemComponent,
    UserComponent,
    SubordinatesComponent,
    SubordinateItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
