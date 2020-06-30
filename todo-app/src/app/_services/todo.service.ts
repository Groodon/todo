import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  getAllTodo() {
    return this.http.get(this.baseUrl + `/todo/`);
  }

  postTodo(todoTask: any) {
    return this.http.post(this.baseUrl + `/todo/`, todoTask);
  }

  deleteTodo(todoId: string) {
    return this.http.delete(this.baseUrl + `/todo/${todoId}`);
  }

  updateTodo(todoId: string, todoTask: any) {
    return this.http.put(this.baseUrl + `/todo/${todoId}`, todoTask);
  }

}
