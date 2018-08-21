import { DataPassService } from './../data-pass.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-topnavigation',
  templateUrl: './topnavigation.component.html',
  styleUrls: ['./topnavigation.component.css']
})
export class TopnavigationComponent {

  constructor(private myService: DataPassService) { }
logout(){
  this.myService.logout();
}
}
