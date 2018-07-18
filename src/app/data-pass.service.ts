import { Injectable } from '@angular/core';
import { CustomerTableComponent } from './customer-table/customer-table.component';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {
  public userConfirmation;
  
  
  constructor() { 
    this.userConfirmation= false;
  }
  confirm(){
    this.userConfirmation = true;
    console.log(this.userConfirmation);
    
  }
  
  getUserConfirmation(){
    return this.userConfirmation;
  }
}
