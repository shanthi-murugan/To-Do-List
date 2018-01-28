import { Injectable } from '@angular/core';


import {ToList} from './list/tolist.model';

@Injectable()
export class TolistService {
  lastItemID: number = 0;
  toListArray: ToList[] = [];
  
  constructor() { }

  addToList(item: ToList): TolistService{
    if(!item.id ){
      this.lastItemID++;
      item.id = this.lastItemID;
      console.log(item.id);
    }
    this.toListArray.push(item);
    console.log(this.toListArray);
    
    return this;

  }

  getToList(): ToList[]{

    return this.toListArray;
  }


  removeFromList(id: number){
    this.toListArray = this.toListArray
    .filter(todo => todo.id !== id);
  return this;
  }

  removeAll(){
    this.toListArray = [];
    return this;
  }
}
