import { Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataPassService {

  
  public deleteIndex = -1;
  public updateIndex= -1;
  constructor() { 
   
  }
  
  // Deleting value on confirm
  confirm(){
    this.data.splice(this.deleteIndex, 1);
  }
  
 
  // Getting index from table and setting in 'deleteIndex'
  setDeleteIndex(index) {
    this.deleteIndex = index ;
  }

  // returing data from here to table
  getData () {
    return this.data;
  }



  confirmData(name:string,status:string,total:string){
    this.data[this.updateIndex].Name = name
    this.data[this.updateIndex].status = status
    this.data[this.updateIndex].total = total

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
