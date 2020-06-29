import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeUpdateTodos = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onTodoUpdate() {
    this.invokeUpdateTodos.emit();
  }
}
