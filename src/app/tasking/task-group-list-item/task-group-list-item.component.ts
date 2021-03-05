import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-group-list-item',
  templateUrl: './task-group-list-item.component.html',
  styleUrls: ['./task-group-list-item.component.scss'],
})
export class TaskGroupListItemComponent implements OnInit {
  groupName: string = '';
  constructor() {}

  ngOnInit(): void {}
}
