import { Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataPassService {

  
  public deleteIndex = -1;
  public updateIndex= -1;
  sales = false;
  return = false;
  shipping = false;
  logoutValue :boolean ;
  loginValue: boolean ;
  constructor() { 
   
  }
  confirm(){
    this.data.splice(this.deleteIndex, 1);
  }
  
 
 
  setDeleteIndex(index) {
    this.deleteIndex = index ;
  }

  
  getData () {
    return this.data;
  }



  confirmData(name:string,status:string,total:string){
    this.data[this.updateIndex].Name=name;
    this.data[this.updateIndex].status=status;
    this.data[this.updateIndex].total=total;

  }

  setupdatedIndex(index){
    this.updateIndex = index ;
  }

  getUpdatedData(){
    return this.data;
  }

  salesReport(){
    
    this.sales = true;
    this.shipping = false;
    this.return = false;
    console.log(0);
  }

  shippingReport(){
    this.shipping = true;
    this.sales = false;
    this.return = false;
    console.log(1);
  }

  returnReport(){
    this.return = true;
    this.sales = false;
    this.shipping = false;
    console.log(2);
  
  }
  setReturn(){
    return this.return;
  }
  setSales(){
    return this.return;
  }
  setShipping(){
    return this.return;
  }

  logout(){
    
     this.logoutValue= true;
     this.loginValue = false;
     console.log("loginValue");
  }


  data = [
    {"id":"123",
      "Name":"Racheal Green",
      "status":"completed",
      "total":"234"
    },
    {"id":"997",
      "Name":"Nolan",
      "status":"completed",
      "total":"333"
    },
    {"id":"776",
      "Name":"emilia clark",
      "status":"processed",
      "total":"830"
    },
    {"id":"043",
      "Name":"Nick Jonas",
      "status":"completed",
      "total":"231"
    },
    {"id":"963",
      "Name":"Ranjit Singh",
      "status":"processed",
      "total":"134"
    },
    {"id":"643",
      "Name":"miley cyrus",
      "status":"completed",
      "total":"543"
    },
    {"id":"492",
      "Name":"Alex",
      "status":"Processed",
      "total":"200"
    }
  ];
  
  
 
}
