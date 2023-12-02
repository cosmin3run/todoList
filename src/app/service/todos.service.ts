import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
todo: Todo[] = []

  constructor() { }

  getCache() {
    this.todo =(JSON.parse(localStorage.getItem('tasks') || '[]'))
    return this.todo
    
  }

  addToList(title: string) {    
    this.todo.push({id: this.todo.length, title: title, completed: false})
    localStorage.setItem('tasks', JSON.stringify(this.todo))
    console.log(this.todo)
  }


 getList(): any {
  return this.todo
 }

 complete(id: number) {
this.todo[id].completed = !this.todo[id].completed
localStorage.setItem('tasks', JSON.stringify(this.todo))

 }

  
}
