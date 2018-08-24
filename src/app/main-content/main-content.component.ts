import { DataPassService } from './../data-pass.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  logoutValue: boolean = false;
  loginValue:boolean = true;
  constructor(myService: DataPassService) { 
    /*this.logoutValue =myService.logoutValue;
    this.loginValue = myService.loginValue;*/
    console.log(this.loginValue);
  }

  ngOnInit() {
  }

}
