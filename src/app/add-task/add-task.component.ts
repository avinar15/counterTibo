import { Component, OnInit } from '@angular/core';
import { NgxModalComponent } from 'ngx-modalview';
import { CommonModule } from '@angular/common';
import { Task } from '../../model/task';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent
  extends NgxModalComponent<any, boolean>
  implements OnInit
{
  task: Task = new Task();
  tasks: Array<Task> = [];

  constructor() {
    super();
  }

  ngOnInit(): void {}

  add() {
    const itemsStorage = localStorage.getItem('tasks');
    if (itemsStorage) {
      this.tasks = JSON.parse(itemsStorage) as Array<Task>;
    }
    this.tasks.push(this.task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));

    this.close();
  }
}
