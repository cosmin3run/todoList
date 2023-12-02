import { Component, OnInit, OnChanges } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  task!: string; 

  constructor(private todo: TodosService) { }

  ngOnInit(): void {
  }
  ngOnChanges() {
  this.task = this.todo.getList().title
console.log(this.task)}

}
