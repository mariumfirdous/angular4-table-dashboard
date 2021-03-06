import { Component } from '@angular/core';


@Component({
  selector: 'app-fusionchart',
  templateUrl: './fusionchart.component.html',
  styleUrls: ['./fusionchart.component.css']
})
export class FusionchartComponent  {

  constructor() { }

 

  width = "33%";
  height = 250;
  type = 'column2d';
  dataFormat = 'json';
  dataSource = {
  "chart": {
      "caption": "Harry's SuperMart",
      "subCaption": "Top 5 stores in last month by revenue",
      "numberPrefix": "$",
      "theme": "ocean"
  },
  "data": [
      {
          "label": "Bakersfield Central",
          "value": "880000"
      },
      {
          "label": "Garden Groove harbour",
          "value": "730000"
      },
      {
          "label": "Los Angeles Topanga",
          "value": "590000"
      },
      {
          "label": "Compton-Rancho Dom",
          "value": "520000"
      },
      {
          "label": "Daly City Serramonte",
          "value": "330000"
      }
  ]
};
}