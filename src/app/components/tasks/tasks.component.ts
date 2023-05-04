import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit{
  tasksList: Task[] = [];
  taskName = '';

  constructor() {}

  ngOnInit(): void {
  }

  addTask() {
    // Create Task object
    const task: Task = {
      name: this.taskName,
      status: false
    }

    //Add Task object to array
    this.tasksList.push(task);

    //Reset input
    this.taskName = '';
  }

  //Delete task
  deleteTask(index : number): void{
    this.tasksList.splice(index, 1);
  }

  //Change task's status
  updateTask(index: number, task: Task): void {
    this.tasksList[index].status = !task.status;
  }
}