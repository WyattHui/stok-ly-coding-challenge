import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  API_BASE = '/api/todo';

  constructor(
    private http: HttpClient
  ) { }

  postTodo(todo:Todo) {
    return this.http.post<Todo>(this.API_BASE, todo);
  }

  putTodo(id:number, todo:Todo) {
    return this.http.put<Todo>(`${this.API_BASE}/${id}`, todo);
  }

  pending(id:number) {
    return this.http.put<Todo>(`${this.API_BASE}/${id}/pending`, {});
  }

  complete(id:number) {
    return this.http.put<Todo>(`${this.API_BASE}/${id}/complete`, {});
  }

  getTodos() {
    const params = new HttpParams()
      .set('orderBy', 'id');
    return this.http.get<Todo[]>(this.API_BASE, {params});
  }

  deleteTodo(id:number) {
    return this.http.delete<Todo>(`${this.API_BASE}/${id}`);
  }
}
