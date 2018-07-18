import { Component} from '@angular/core';
import { DataPassService } from './../data-pass.service';
import { MatDialogRef} from "@angular/material";



@Component({
  selector: 'app-popup-table',
  templateUrl: './popup-table.component.html',
  styleUrls: ['./popup-table.component.css']
})
export class PopupTableComponent  {

 

  constructor(public editDialogRef: MatDialogRef<PopupTableComponent>, private myService: DataPassService){}
    

  update(name: string,status: string,total:string){
    this.myService.confirmData(name,status,total);
    this.editDialogRef.close(); 
  }
  close(){
  
    this.editDialogRef.close(); 
  }



}
