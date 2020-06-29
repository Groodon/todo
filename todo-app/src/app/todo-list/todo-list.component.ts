import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../_services/todo.service';
import {EventEmitterService} from '../_services/event-emitter.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<Comment[]>();

  constructor(private todoService: TodoService,
              private eventEmitterService: EventEmitterService) { }

  todoTasks: any;

  ngOnInit(): void {
    this.todoService.getAllTodo().subscribe(res => {
      this.todoTasks = res;
    })

    if (this.eventEmitterService.subsVar === undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
      invokeUpdateTodos.subscribe(() => {
        console.log("hello eller");
        this.updateTodos();
      });
    }
  }

  updateTodos() {
    const promise = new Promise((resolve, reject) => {
      this.todoService.getAllTodo().subscribe(todos => {
        this.todoTasks = todos;  
      });
    });
    return promise;
  }

}
