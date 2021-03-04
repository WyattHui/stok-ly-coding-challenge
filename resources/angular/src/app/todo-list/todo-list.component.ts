import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../todo.service';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  addTodoForm = this.formBuilder.group({
    description: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
    this.updateTodo = this.updateTodo.bind(this);
  }

  ngOnInit() {}

  postTodo() {
    this.todoService.postTodo(this.addTodoForm.value)
      .subscribe((todo:Todo) => {
        this.todos.unshift(todo);
      });
    this.addTodoForm.reset();
  }

  putTodo(event:any, todo:Todo) {
    console.warn(event.target.value);
    todo.description = event.target.value;
    this.todoService.putTodo(todo.id, todo).subscribe();
  }

  toggleTodoStatus(todo:Todo) {
    let todoId = todo.id;
    if (todo.status) {
      this.todoService.pending(todoId).subscribe(this.updateTodo);
    } else {
      this.todoService.complete(todoId).subscribe(this.updateTodo);
    }
  }

  updateTodo(newTodo:Todo) {
    let todoId = newTodo.id;
    this.todos = this.todos.map((todo:Todo) => {
      return todo.id === todoId ? newTodo : todo;
    });
  }

  deleteTodo(todo:Todo) {
    let todoId = todo.id;
    this.todos = this.todos.filter((todo:Todo) => {
      return todo.id !== todoId;
    });
    this.todoService.deleteTodo(todoId).subscribe();
  }

}
