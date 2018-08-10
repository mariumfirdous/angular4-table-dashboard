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
   console.log("dropdown");

 }
 openSalesReports(){
   console.log("sales");
   this.myService.salesReport();
  
   
 }
 openShippingReports(){
   console.log("shipping");
  this.myService.shippingReport();
  
 }
 openReturnsReports(){
   console.log("return");
  this.myService.returnReport();
 
  
 }

}


