import { Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataPassService {

  
  public deleteIndex = -1;
  public updateIndex= -1;
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
