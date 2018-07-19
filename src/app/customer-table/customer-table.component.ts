import { PopupTableComponent } from './../popup-table/popup-table.component';
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
 
  data: any = [];
  p: number = 1;
  constructor(private dialog:MatDialog, private myService: DataPassService, private dialogEdit:MatDialog) { 

    // Getting data from service onLoad
    this.data = myService.getData();
    this.data = myService.getUpdatedData();
    
  }
  
 
  openDialog(index: number){
    console.log(index);

    const dialogConfig = new MatDialogConfig();
    this.dialog.open(PopupComponent, dialogConfig);


    // Sending index to service
    this.myService.setDeleteIndex(index);
    
  }

  openEditDialog(index: number){
    console.log(index);

    const editDialogConfig = new MatDialogConfig();
    this.dialogEdit.open(PopupTableComponent, editDialogConfig);

  
    // Sending index to service
    this.myService.setupdatedIndex(index);
  }

 
}
