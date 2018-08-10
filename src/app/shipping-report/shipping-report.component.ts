import { Component, OnInit } from '@angular/core';
import { DataPassService } from './../data-pass.service';

@Component({
  selector: 'app-shipping-report',
  templateUrl: './shipping-report.component.html',
  styleUrls: ['./shipping-report.component.css']
})
export class ShippingReportComponent implements OnInit {
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
