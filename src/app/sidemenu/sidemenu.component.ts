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
report:boolean = true;
router:boolean = false;

 reportsDropdown(){
   this.dropdown = !this.dropdown;
   console.log("dropdown");

 }
 openSalesReports(){
   console.log("sales");
   this.myService.salesReport();
   this.report = false;
   this. router = true;
   return this.router;
   
 }
 openShippingReports(){
   console.log("shipping");
  this.myService.shippingReport();
  this.report = false;
   this. router = true;
   return this.router;
  
 }
 openReturnsReports(){
   console.log("return");
  this.myService.returnReport();
  this.report = false;
   this. router = true;
   return this.router;
  
 }
 openShipping(){
  console.log("ship");
 this.myService.returnReport();
 }
 openSales(){
  console.log("sales");
 this.myService.returnReport();
 }
 openReturns(){
  console.log("return");
 this.myService.returnReport();
 }
}


