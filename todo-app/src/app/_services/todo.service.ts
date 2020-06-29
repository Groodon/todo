import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private http: HttpClient) { }

  //TODO: where to put errors, here or in components?

  getAllTodo() {
    return this.http.get(`http://localhost:3000/todo/`);
  }

  postTodo(todoTask: any) {
    return this.http.post(`http://localhost:3000/todo/`, todoTask);
  }

  deleteTodo(todoId: string) {
    return this.http.delete(`http://localhost:3000/todo/${todoId}`);
  }

  updateTodo(todoId: string, todoTask: any) {
    return this.http.put(`http://localhost:3000/todo/${todoId}`, todoTask);
  }

}
