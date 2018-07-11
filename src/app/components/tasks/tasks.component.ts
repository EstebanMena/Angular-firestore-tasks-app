import { Component, OnInit } from '@angular/core';

import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  editState: boolean = false;
  taskToEdit: Task;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  deleteTask(event, task) {
    const response = confirm('Are you sure about delete this task?');
    if (response) {
      this.taskService.deleteTask(task);
    }
    return;
  }

  editTask(event, task) {
    this.editState = true;
    this.taskToEdit = task;
  }

  updateTask(task) {
    this.taskService.updateTask(task);
    this.editState = false;
  }

}