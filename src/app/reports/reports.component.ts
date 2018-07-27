import { DataPassService } from './../data-pass.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
sales : boolean;
shipping : boolean;
return : boolean;
  constructor(private myService: DataPassService) { 
   
  }

  ngOnInit() {
    this.sales=this.myService.sales;
    this.shipping=this.myService.shipping;
    this.return=this.myService.return;
    console.log(this.return,this.sales,this.shipping);
  }

}
