import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
todo: Todo[] = []

  constructor() { }

  addToList(title: string) {    
    this.todo.push({id: this.todo.length, title: title, completed: false})
    console.log(this.todo)
  }

 getList(): any {
  return this.todo
 }


  
}
