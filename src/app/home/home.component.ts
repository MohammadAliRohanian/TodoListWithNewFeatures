import { ItemService } from './../item.service';
import { Component, OnInit } from '@angular/core';
import { Model, TodoItem } from '../Model/Model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Model=new Model();
  newItem: string="";

  // retuen username from model
  getName(){
    return this.Model.user;
  }

  //retuen all task
  getItem(){
    return this.Model.item;
  }

  //add new item
  addItem(newItem){
    if (newItem != ""){
      this.Model.item.push(new TodoItem(newItem,false));
      this.newItem='';
    }
    else{
      alert("Please Enter Your Task :)")
    }
  }

  //remove item
  removeItem(i){
    this.Model.item.splice(i,1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
