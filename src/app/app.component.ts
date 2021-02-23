import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Taskie';
  taskieFilterSelected = 'all';
  taskPanelOpenState = true;
  focusedTaskName = "Create Dashboard Page"
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
  {position: 1, name: 'Create Dashboard Page', type: 'Personal', status: 'InProcess'},
  {position: 2, name: 'Create Focused Task Utility', type: 'Personal', status: 'InProcess'},
  {position: 3, name: 'Create Task Grid', type: 'Personal', status: 'InProcess'},
  {position: 3, name: 'Create Backlog Grid', type: 'Personal', status: 'InProcess'},
];
