import { DataPassService } from './../data-pass.service';
import { Component} from '@angular/core';
import { MatDialogRef} from "@angular/material";



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent  {
  
  constructor(public dialogRef: MatDialogRef<PopupComponent>, private myService: DataPassService){}
    

  
  ok(){
    this.myService.confirm();
    this.dialogRef.close(); 
  }
  close(){
  
    this.dialogRef.close(); 
  }


  
}
