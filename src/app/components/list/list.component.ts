import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  task!: Todo[]; 

  constructor(private todo: TodosService) { }

  ngOnInit(): void {
    this.todo.getList()
    this.task = this.todo
    
    
  }

}
