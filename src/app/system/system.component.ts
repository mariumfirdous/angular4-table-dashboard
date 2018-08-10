import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  
  constructor() { 
   }
  newAttribute : any= {};
  selectedAll: any;
  showBox:boolean = false;
  SelectedIDs:any[];
  newVar =[];
  newData =[];
  index:number;
  random:boolean = false;
  indexNewVar:number;
  ngOnInit() {
    
  }
  delete(){
   for ( var i=0;i<this.sysData.length;i++){
    console.log("i loop");
    for (var j=0;j<this.newVar.length;j++){
      console.log("j loop");
      if (i==this.newVar[j]){
        console.log("check i with newVar");
        this.random = true;
        console.log("random value");              
     }
     console.log("out of if loop");
     
    }
    if(this.random !== true){
      console.log(this.random);
      console.log("random value above");
      this.newData.push(this.sysData[i]);
     }
     this.random= false;   
   }
   console.log(JSON.stringify(this.newData));
   this.sysData = this.newData;
   console.log(JSON.stringify(this.sysData));
  }
  checkedBox(a: number){
    console.log(a);
    this.index=a;
    for( var i=0;i<this.newVar.length;i++){
      if(this.index==this.newVar[i]){
        this.random = true;
        this.indexNewVar = i;
      }
  
    }
    if(this.random!== true){
     this.newVar.push(this.index);
    }else{
      this.newVar.splice(this.indexNewVar,1);
    }
    this.random = false; 
    console.log(this.newVar);
   return this.newVar;
  }
 
  checkAll(){
    for(var i=0;i<this.sysData.length;i++){
      this.checkedBox(i);
    }
  }
 setIndex(a:number){
   this.index = a;
   return this.index;
 }
  add() {
    this.sysData.push(this.newAttribute);
    this.newAttribute = {};
}
insert(){
  this.showBox = !this.showBox;
}
selectAll() {
  for (var i = 0; i < this.sysData.length; i++) {
    this.sysData[i].selected = this.selectedAll;
  }
}
checkIfAllSelected() {
  this.selectedAll = this.sysData.every(function(item:any) {
    console.log(item.selected);
      item.selected == true;
      console.log(item.selected);
      return item.selected == true;
 })
 
}
 
  
sysData =[
  {
  "name":"Accessories",
  "status":"Disabled",
  "selected": ""
},
{
  "name":"Grocery",
  "status":"Enabled",
  "selected": ""
},
{
  "name":"Fashion",
  "status":"Enabled",
  "selected": ""
},
{
  "name":"Electronics",
  "status":"Enabled",
  "selected": ""
},
{
  "name":"shoes",
  "status":"Disabled",
  "selected": ""
}
];
}
