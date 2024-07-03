import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Task } from '../../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private storageKey = 'tasks';

  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.updateDays();
  //     setInterval(() => this.updateDays(), 24 * 60 * 60 * 1000); // Check every 24 hours
  //   }
  // }

  // getTasks(): Task[] {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const tasksJson = localStorage.getItem(this.storageKey);
  //     return tasksJson ? JSON.parse(tasksJson) : [];
  //   }
  //   return [];
  // }

  // saveTask(task: Task): void {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const tasks = this.getTasks();
  //     tasks.push(task);
  //     localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  //   }
  // }

  // deleteTask(taskTitle: string): void {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const tasks = this.getTasks();
  //     const updatedTasks = tasks.filter(task => task.title !== taskTitle);
  //     localStorage.setItem(this.storageKey, JSON.stringify(updatedTasks));
  //   }
  // }

  // private updateDays(): void {
  //   const tasks = this.getTasks();
  //   const currentDate = new Date().getTime();
  //   let updated = false;

  //   tasks.forEach(task => {
  //     if (!task.lastUpdated) {
  //       task.lastUpdated = currentDate;
  //     }

  //     const daysElapsed = Math.floor((currentDate - task.lastUpdated) / (24 * 60 * 60 * 1000));
  //     if (daysElapsed > 0) {
  //       task.counter -= daysElapsed;
  //       if (task.counter < 0) task.counter = 0;
  //       task.lastUpdated = currentDate;
  //       updated = true;
  //     }
  //   });

  //   if (updated) {
  //     localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  //   }
  // }
}
