import { Component, OnInit } from '@angular/core';

import { ToList } from './ToList.model';
import {TolistService} from '../tolist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [ '../../assets/css/bootstrap.min.css']
  
})
export class ListComponent implements OnInit {

  newItem: string;
  toList = [];
  newlist : ToList = new ToList();
  todellist:ToList[]=[];
  
  constructor(private toListService: TolistService) {
   }

  ngOnInit() {
  //  this.getDos();
  }

  addTodo() {
    this.newlist.title = this.newItem;
    console.log(this.newItem);
    this.toListService.addToList(this.newlist);
    console.log('Gello');
    this.newItem = '';
    this.newlist = new ToList();
  }

  getDos(){
    return this.toListService.getToList();
  }

  removeFromList(todo){
    this.toListService.removeFromList(todo.id);
  }

  removeAll(){
    this.toListService.removeAll();
  }

  selectedItems(todo : ToList){
    if(this.todellist.find(x=>x==todo))
    {
    this.todellist.splice(this.todellist.indexOf(todo),1)
    }
    else{
    this.todellist.push(todo);
    }
  }
  deleteItemSelected(){
    let selecteds = this.todellist.filter((todo, index) => {
      console.log(todo);
      this.removeFromList(todo);
      return this;
  });
  console.log(selecteds);
  }
}
