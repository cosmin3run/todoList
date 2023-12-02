import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
title!: string;



  constructor(private todo: TodosService) { }

   ngOnInit(): void {
    

  }
  
  addTask(title: string) {
    setTimeout(() => {
      this.todo.addToList(title)
   
    }, 2000 )
  }

}
