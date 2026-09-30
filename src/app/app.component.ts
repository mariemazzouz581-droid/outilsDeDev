import { Component } from '@angular/core';
import { taskservice } from './task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*styleUrl: './app.component.css'*/
})
export class App {

  taskList: Task[] = [];

  isLoading: boolean = false;

  constructor(private taskservice: taskservice) {
    this.loadTasks();
  }

  loadTasks(): void {
    this.isLoading = true;

    this.taskList = this.taskservice.getTasks();

    this.isLoading = false;
  }
}