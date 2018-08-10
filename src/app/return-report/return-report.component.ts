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
  sortedData :  any=[{
   "year":"",
   "total":""
  }];
  random : boolean;
  constructor(private myService: DataPassService) { 

  }
  ngOnInit() {
    this.sales=this.myService.sales;
    this.shipping=this.myService.shipping;
    this.return=this.myService.return;
  }
  sortedTable(value: any){
    this.yearTable = true;
    console.log("sorted");
    this.defaultTable = false;
    console.log(this.yearTable);
    this.sort(value);
  }

  sort(param: any){
    console.log("sort");
    console.log(param);
    if(param === "yearTab" ){
      for( var x=0;x<=this.returnData.length;x++){

      console.log("check year value");

      for( var i=0;i<=this.returnData.length;i++){

        console.log("i loop");
        console.log(this.returnData[i].year);
        for (var z=0;z<=this.returnData.length;z++){
          while(this.sortedData.length==0){
            this.sortedData.push(this.returnData[0]);
          }
          if(this.returnData[i].year==this.sortedData[z].year){
            this.random = true;

            console.log("checking sortedData");
          }
        }
        if(this.random== false){
          this.sortedData.push(this.returnData[i]);

          console.log("adding row in sortedData");

        }
        for(var j=i+1;j<=this.returnData.length;j++){

          console.log("j loop");
          
          if(this.returnData[i].year===this.returnData[j].year){
            
            console.log("first if");

            this.random = true;
            this.sortedData[x].total=this.returnData[i].total+this.returnData[j].total;   
                    
            console.log("increment");    

            console.log(this.random);
            this.sortedData.push(this.returnData[i].total);         
          }             
          
          }        
          console.log(JSON.stringify(this.returnData));   
        return this.returnData;
        
      } 
              
    }
    }
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
  }
]

}
