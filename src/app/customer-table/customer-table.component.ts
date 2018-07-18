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
 
  constructor(private dialog:MatDialog, private myService: DataPassService) { 
    
  }

  newIndex;
  openDialog(index: number){
    console.log(index);
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(PopupComponent, dialogConfig);
    this.newIndex=index;
    if( this.myService.getUserConfirmation() == true){
      this.data.splice(this.newIndex,1);
    }
  
  }
  confirmData(){
    
    
      alert("not deleted");
   
  }

  
   data = [
    {"id":"123",
      "Name":"Racheal Green",
      "status":"completed",
      "total":"$234",
      "date":"24 apr 2017",
      "orders": "5"
    },
    {"id":"997",
      "Name":"Nolan",
      "status":"completed",
      "total":"$333",
      "date":"2 dec 2017",
      "orders": "8"
    },
    {"id":"776",
      "Name":"emilia clark",
      "status":"processed",
      "total":"$830",
      "date":"7 aug 2017",
      "orders": "10"
    },
    {"id":"043",
      "Name":"Nick Jonas",
      "status":"completed",
      "total":"$231",
      "date":"16 jun 2018",
      "orders": "51"
    },
    {"id":"963",
      "Name":"Ranjit Singh",
      "status":"processed",
      "total":"$134",
      "date":"4 oct 2017",
      "orders": "62"
    },
    {"id":"643",
      "Name":"miley cyrus",
      "status":"completed",
      "total":"$543",
      "date":"24 jan 2018",
      "orders": "84"
    },
    {"id":"492",
      "Name":"Alex",
      "status":"Processed",
      "total":"$200",
      "date":"24 apr 2018",
      "orders": "25"
    }
  ];

}
