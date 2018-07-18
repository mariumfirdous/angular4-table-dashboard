import { DataPassService } from './../data-pass.service';
import { PopupComponent } from './../popup/popup.component';
import { Component} from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material';



@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css'],

})

export class CustomerTableComponent {
 
  data = []
  constructor(private dialog:MatDialog, private myService: DataPassService) { 

    // Getting data from service onLoad
    this.data = myService.getData()
  }

  newIndex;
  openDialog(index: number){
    console.log(index);

    const dialogConfig = new MatDialogConfig();
    this.dialog.open(PopupComponent, dialogConfig);

    this.newIndex=index;

    // Sending index to service
    this.myService.setDeleteIndex(index)
  }

  confirmData(){
    alert("not deleted");
   
  }
}
