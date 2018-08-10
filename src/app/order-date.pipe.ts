import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderDate'
})
export class OrderDatePipe implements PipeTransform {

  transform(data: any, property: any): any {
    if(!data){
      return null;
    }
    if(property==="year"){
      console.log("yearss");
    }
  }
  }


