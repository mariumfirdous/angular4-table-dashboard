import { DataPassService } from './../data-pass.service';

import { Component } from '@angular/core';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {
constructor(private myService: DataPassService){
  
}
dropdown:boolean = false;

 reportsDropdown(){
   this.dropdown = !this.dropdown;
 }
 openSalesReports(){
   this.myService.salesReport();
 }
 openShippingReports(){
  this.myService.shippingReport();
 }
 openReturnsReports(){
  this.myService.returnReport();
 }
}


