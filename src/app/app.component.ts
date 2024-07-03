import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgxModalService, NgxModalView } from 'ngx-modalview';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { Task, TaskView } from '../model/task';
import moment from 'moment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgxModalView, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  currentTime: string = '';
  intervalId?: number;
  taskTitle?: string;
  taskTime?: number;
  tasks: TaskView[] = [];

  constructor(private modalservice: NgxModalService) {}

  ngOnInit(): void {
    this.loadTasks();
    this.updatetime();
    this.newTime();
  }

  loadTasks() {
    this.tasks = [];

    const allTasks = localStorage.getItem('tasks');
    if (allTasks) {
      const items = JSON.parse(allTasks) as Task[];
      for (let item of items) {
        let task = new TaskView();
        task.endDate = item.endDate;
        task.startDate = item.startDate;
        task.title = item.title;
        console.log(item.title);

        this.tasks.push(task);
      }
    }
  }

  addTask() {
    this.modalservice.addModal(AddTaskComponent).subscribe((res) => {
      this.ngOnInit();
    });
  }

  deleteTask(index: number) {
    if (this.tasks.length > index) {
      this.tasks.splice(index, 1);
      this.save();
    }
  }

  save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  updatetime() {
    setInterval(() => {
      this.loadTasks();
    }, 6 * 60 * 60 * 1000);
  }

  newTime() {
    setInterval(() => {
      this.currentTime = moment().format('ddd DD/MM/y H:mm:ss');
    }, 1000);
  }
}
