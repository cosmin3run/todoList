import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/service/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
tasks: Todo[] = this.todoSrv.todo



  constructor(private todoSrv: TodosService) { }

   ngOnInit(): void {
    

  }
  
  completeTask(id: number): void {
    
      this.todoSrv.complete(id)
    
  }

  addTask(title: string): void {
    setTimeout(() => {
      this.todoSrv.addToList(title)
   
    }, 2000 )
  }

}
