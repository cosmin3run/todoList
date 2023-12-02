import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  tasksDone: Todo[] = []

  constructor(private todoSrv: TodosService) { }

  ngOnInit(): void {
    setTimeout(() => {
      const main = document.getElementById("main")
      const attesa = document.getElementById("attesa")
      attesa!.className = "d-none"
      main!.classList.remove('d-none')
      this.tasksDone = this.todoSrv.getCache()
    }, 2000)

  }

}
