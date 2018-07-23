import { PopupTableComponent } from './../popup-table/popup-table.component';
import { DataPassService } from './../data-pass.service';
import { PopupComponent } from './../popup/popup.component';
import { Component, OnInit} from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private dialog:MatDialog, private myService: DataPassService, private dialogEdit:MatDialog) { 
    this.data = myService.getData();
    this.data = myService.getUpdatedData();
}
  grocery= false;
  fashion = false;
  electronics= false;
  data: any = [];
  

  ngOnInit() {
    
  }
groceryTable(){
  this.grocery= true;
  this.fashion = false;
  this.electronics= false;
  this.data = this.jsonGrocery;

}
fashionTable(){
  this.grocery= false;
  this.fashion = true;
  this.electronics= false;
  this.data= this.jsonFashion;
}
electronicsTable(){
  this.grocery= false;
  this.fashion = false;
  this.electronics= true;
  this.data= this.jsonElectronics;
}

delete(index: number){
  console.log(index);

  const dialogConfig = new MatDialogConfig();
  this.dialog.open(PopupComponent, dialogConfig);


  // Sending index to service
  this.myService.setDeleteIndex(index);
  
}

edit(index: number){
  console.log(index);

  const editDialogConfig = new MatDialogConfig();
  this.dialogEdit.open(PopupTableComponent, editDialogConfig);


  // Sending index to service
  this.myService.setupdatedIndex(index);
}



jsonGrocery = [
  {"id":"123",
    "name":"Salt",
    "status":"Out of stock",
    "total":"234"
  },
  {"id":"997",
    "name":"Ice-cream",
    "status":"Out of stock",
    "total":"333"
  },
  {"id":"776",
    "name":"Sugar",
    "status":"Available",
    "total":"830"
  },
  {"id":"043",
    "name":"Refined oil",
    "status":"Out of stock",
    "total":"231"
  },
  {"id":"963",
    "name":"Fruit",
    "status":"Available",
    "total":"134"
  },
  {"id":"643",
    "name":"Vegetables",
    "status":"Available",
    "total":"543"
  },
  {"id":"492",
    "name":"Soap",
    "status":"Available",
    "total":"200"
  }
];

jsonFashion = [
  {"id":"123",
    "name":"Tshirt",
    "status":"Out of stock",
    "total":"234"
  },
  {"id":"997",
    "name":"Shoes",
    "status":"Out of stock",
    "total":"333"
  },
  {"id":"776",
    "name":"Bracelet",
    "status":"Available",
    "total":"830"
  },
  {"id":"043",
    "name":"Jeans",
    "status":"Out of stock",
    "total":"231"
  },
  {"id":"963",
    "name":"trousers",
    "status":"Available",
    "total":"134"
  },
  {"id":"643",
    "name":"Makeup",
    "status":"Available",
    "total":"543"
  },
  {"id":"492",
    "name":"scarf",
    "status":"Available",
    "total":"200"
  }
];

jsonElectronics = [
  {"id":"123",
    "name":"Mobile Phones",
    "status":"Out of stock",
    "total":"234"
  },
  {"id":"997",
    "name":"Tablet",
    "status":"Out of stock",
    "total":"333"
  },
  {"id":"776",
    "name":"Dekstop",
    "status":"Available",
    "total":"830"
  },
  {"id":"043",
    "name":"Pendrive",
    "status":"Out of stock",
    "total":"231"
  },
  {"id":"963",
    "name":"Laptop",
    "status":"Available",
    "total":"134"
  },
  {"id":"643",
    "name":"headphones",
    "status":"Available",
    "total":"543"
  },
  {"id":"492",
    "name":"Speaker",
    "status":"Available",
    "total":"200"
  }
];
}
