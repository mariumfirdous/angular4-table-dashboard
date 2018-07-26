import { DataPassService } from './../data-pass.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private myService: DataPassService) { }

  ngOnInit() {
    
  }
 sales = this.myService.sales;
 return = this.myService.return;
 shipping = this.myService.shipping;
}
