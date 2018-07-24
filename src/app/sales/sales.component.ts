import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  p:number=1;
  constructor() { }
 newVar :any;
  ngOnInit() {
  }
  private newAttribute: any = {};

  add() {
      this.salesData.push(this.newAttribute);
      this.newAttribute = {};
  }
delete(a:number){
  this.salesData.splice(a,1);
}
  
salesData =[
	{
		"id": "639",
		"name": "Regan",
		"phone": "493-6799",
		"city": "Steendorp",
		"amount": "7319",
		"date": "24-03-2018"
	},
	{
		"id": "817",
		"name": "Darryl",
		"phone": "628-2082",
		"city": "Chapecó",
		"amount": "1883",
		"date": "20-05-2018"
	},
	{
		"id": "491",
		"name": "Randall",
		"phone": "1-525-678-9376",
		"city": "Montignoso",
		"amount": "4811",
		"date": "29-08-2017"
	},
	{
		"id": "174",
		"name": "Phillip",
		"phone": "1-315-573-0829",
		"city": "Colomiers",
		"amount": "9925",
		"date": "09-10-2017"
	},
	{
		"id": "582",
		"name": "Chanda",
		"phone": "193-9724",
		"city": "Lac Ste. Anne",
		"amount": "4855",
		"date": "26-10-2018"
	},
	{
		"id": "371",
		"name": "Colby",
		"phone": "821-2933",
		"city": "Stratford-upon-Avon",
		"amount": "2133",
		"date": "06-01-2018"
	},
	{
		"id": "555",
		"name": "Lee",
		"phone": "760-1496",
		"city": "Castel Volturno",
		"amount": "6467",
		"date": "20-07-2017"
	}
]
}
