import {Component, inject, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ListItem} from './list-item/list-item';
import {JsonPipe} from '@angular/common';
import {TodoListService} from './services/todo-list-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    ListItem,
    JsonPipe
  ],
  styleUrl: './app.css'
})
export class App implements OnInit {


  private todoListService = inject(TodoListService)

  ngOnInit(): void {
    this.allTodoItems = this.todoListService.load();
    console.log("Hallo");
  }

  allTodoItems: TodoItem[] = [];

  public inputPlaceholderText: string = "Neues Todo hinzufügen";

  hinzufuegen(todoEingabe: string) {
    this.allTodoItems.push({
      description: todoEingabe,
      done: false
    });
    this.todoListService.store(this.allTodoItems);
  }

  deleteTodo(index: number) {
    this.allTodoItems.splice(index, 1)

  }
}

export interface TodoItem {
  description: string;
  done: boolean;
}
