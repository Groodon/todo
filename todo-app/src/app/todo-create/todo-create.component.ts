import { Component, OnInit } from '@angular/core';
import { TodoService } from '../_services/todo.service'
import { EventEmitterService } from '../_services/event-emitter.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  taskValue: string;

  constructor(private todoService: TodoService,
              private eventEmitterService: EventEmitterService) { }

  onSubmit(taskDescription: string) {
    if (taskDescription.length >= 1) {
      this.todoService.postTodo({description: taskDescription}).subscribe(() => {
        this.eventEmitterService.onTodoUpdate();
        this.taskValue = '';
      });
    }
    
  }

  ngOnInit(): void {
  }

}
