import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/service/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
tasks: Todo[] = []



  constructor(private todoSrv: TodosService) { }

   public ngOnInit() {
     setTimeout(() => {
       const main = document.getElementById("main")
       const attesa = document.getElementById("attesa")
       attesa!.className = "d-none"
       main!.classList.remove('d-none')
       this.tasks = this.todoSrv.getCache()
      }, 2000);
    }
    
    
    completeTask(id: number): void {
    
      this.todoSrv.complete(id)
    
  }

  addTask(title: string): void {
    setTimeout(() => {
      this.todoSrv.addToList(title)
   
    }, 2000 );
    const input = document.getElementById("input") as HTMLInputElement
    input.value = ""
  }

}
