import { Component, OnInit } from '@angular/core';
import { DataPassService } from './../data-pass.service';
import { ValueTransformer, stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-return-report',
  templateUrl: './return-report.component.html',
  styleUrls: ['./return-report.component.css']
})
export class ReturnReportComponent implements OnInit {
  sales : boolean;
  shipping : boolean;
  return : boolean;
  yearTable : boolean = false;
  defaultTable : boolean = true;
  sortedData :  any=[];
  random : number;
  constructor(private myService: DataPassService) { 

  }
  ngOnInit() {
    this.sales=this.myService.sales;
    this.shipping=this.myService.shipping;
    this.return=this.myService.return;
  }
  sortedTable(value: string){
    this.yearTable = true;
    console.log("sorted");
    this.defaultTable = false;
    console.log(this.yearTable);
    this.sort(value);
  }
  sort(value: string){
    console.log("sort");
    if( value === 'yearTab'){
      console.log("first if");
      
      console.log(JSON.stringify(this.sortedData));
      
      for (var  i=0; i<this.returnData.length; i++){
        this.random=0;
        this.checkSortedData(this.returnData[i].year);
        console.log(this.random);
        console.log(this.returnData[i].year);
        if(this.random == -1){
          this.sortedData.push(this.returnData[i]);
          console.log(this.sortedData[i].total);
        }
        else {         
          this.sortedData[this.random].total= this.sortedData[this.random].total + this.returnData[i].total; 
        }
      }
    }
  }
checkSortedData(num: number){
  for( var i=0; i<this.sortedData.length ; i++){
   console.log(num);
    if( this.sortedData[i].year == num){
      this.random = i;
      console.log("number");
      console.log(num );
      return this.random;
    }  
  }
  
    this.random = -1;
    return this.random;
  
}


returnData = [
  { "date":25,
  "month": 4,
  "year": 2018,
    "total": 2
  },
  {
    "date":18,
    "month": 10,
    "year": 2017,
    "total": 3
  },
  {
    "date":10,
    "month": 6,
    "year": 2018,
    "total": 1
  },
  {
    "date":4,
    "month": 1,
    "year": 2017,
    "total":4
  },
  {
    "date":30,
    "month": 8,
    "year": 2016,
    "total":6
  },
  {
    "date":30,
    "month": 8,
    "year": 2017,
    "total":4
  },
  {
    "date":30,
    "month": 8,
    "year": 2018,
    "total":2
  }
]

}
