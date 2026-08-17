import {Service} from '@angular/core';
import {TodoItem} from '../app';

@Service()
export class TodoListService {
  store(todoList: TodoItem[]) {
    const JsonString = JSON.stringify(todoList)
    localStorage.setItem("todoList", JsonString);
  }

  load(): TodoItem[] {
    return JSON.parse(localStorage.getItem("todoList") ?? '')
  }
}

