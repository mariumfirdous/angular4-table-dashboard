import { Component, OnInit } from '@angular/core';
import { DataPassService } from './../data-pass.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {
sales : boolean;
shipping : boolean;
return : boolean;
  constructor() { 
   

  }

  ngOnInit() {

  }

}
