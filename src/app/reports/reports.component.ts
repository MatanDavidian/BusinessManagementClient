import { Component, OnInit, Input} from '@angular/core';
import { User } from '../User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Report } from '../Report';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [DatePipe]
})
export class ReportsComponent implements OnInit {
  @Input() user: User;
  @Input('ngModel')
  reports: Report[] = []
  private apiUrl = "http://localhost:8080/report/add"
  closeResult: string;
  private my_report: Report;
  myDate = new Date();

  constructor(private http:HttpClient, private modalService: NgbModal, private datePipe: DatePipe) {}

  ngOnInit(): void {
    console.log("reports comp")
    console.log(this.user)
    }

  sendReport(reportval: string){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    console.log("send report")
    console.log(reportval)
    var date = this.myDate.toLocaleDateString();

    console.log(date)

    this.my_report = {from:this.user.first_name,to:this.user.manager,ass_date:date,text:reportval}

    console.log(this.my_report)
    //this.http.post<Report>(this.apiUrl, JSON.stringify({}), httpOptions)
    this.http.post<Report>(this.apiUrl, JSON.stringify(this.my_report), httpOptions).subscribe( data => {
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
