import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title="Order Stats"
  stat= [
    { 
      "number":"300",
      "month":"january"
  },
{
  "number":"500",
  "month":"February"
},
{
  "number":"226",
  "month":"march"
},
{
  "number":"2050",
  "month":"April"
}];

}
