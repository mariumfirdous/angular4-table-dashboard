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
   index:number;

  ngOnInit() {
    
  }
  delete(){
   for ( var i=0;i<this.newVar.length;i++){
     
     this.sysData.splice(this.newVar[i],1);
     
console.log(i)
   }
   this.newVar=[];
  }
 
 checkedBox(a: number){
   console.log(a);
   this.index=a;
  this.newVar.push(this.index);
  console.log(this.newVar);
  return this.newVar;
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
