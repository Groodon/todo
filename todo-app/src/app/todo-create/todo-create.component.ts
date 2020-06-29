import { Component, OnInit } from '@angular/core';
import { TodoService } from '../_services/todo.service'
import { EventEmitterService } from '../_services/event-emitter.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  // TODO: types and private/public and why...
  taskValue: string;

  constructor(private todoService: TodoService,
              private eventEmitterService: EventEmitterService) { }

  onSubmit(taskDescription: string) {
    this.todoService.postTodo({description: taskDescription}).subscribe(() => {
      this.eventEmitterService.onTodoUpdate();
      this.taskValue = '';
    }); 
    console.log(taskDescription);
  }

  ngOnInit(): void {
  }

}
