import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../_services/todo.service';
import { EventEmitterService } from '../../_services/event-emitter.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  constructor(private todoService: TodoService,
              private eventEmitterService: EventEmitterService) { }

  @Input() description: string;
  @Input() completed: boolean;
  @Input() id: string;

  delete(): void {
    this.todoService.deleteTodo(this.id).subscribe(res => {
      this.eventEmitterService.onTodoUpdate();
    });
  }

  update(): void {
    this.todoService.updateTodo(this.id, {completed: !this.completed}).subscribe(() => {
      this.eventEmitterService.onTodoUpdate();
    })
  }

  ngOnInit(): void {
  }

}
