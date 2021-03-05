import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  taskPanelOpenState = true;
  focusedTaskName = 'Create Dashboard Page';
  priority = 'tasklist';
  priorityLevel = 'top';
  @Input() depth: number = 0;

  constructor() {}

  ngOnInit(): void {}
  title = 'Dashboard';
  displayedColumns = ['position', 'name', 'type', 'status'];
  dataSource = TASK_DATA;
}

export interface TaskieTask {
  name: string;
  position: number;
  type: string;
  status: string;
}

const TASK_DATA: TaskieTask[] = [
  {
    position: 1,
    name: 'Create Dashboard Page',
    type: 'Personal',
    status: 'InProcess',
  },
  {
    position: 2,
    name: 'Create Focused Task Utility',
    type: 'Personal',
    status: 'InProcess',
  },
  {
    position: 3,
    name: 'Create Task Grid',
    type: 'Personal',
    status: 'InProcess',
  },
  {
    position: 3,
    name: 'Create Backlog Grid',
    type: 'Personal',
    status: 'InProcess',
  },
];
