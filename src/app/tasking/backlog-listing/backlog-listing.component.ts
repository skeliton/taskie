import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-backlog-listing',
  templateUrl: './backlog-listing.component.html',
  styleUrls: ['./backlog-listing.component.scss'],
}) // implements OnInit, AfterViewInit
export class BacklogListingComponent {
  @Input() title = '';
  tasks$: Observable<ITask[]> | undefined;
  displayedColumns = ['currentPosition', 'name', 'id'];
  dataSource!: MatTableDataSource<ITask>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.getTasks();
    //this.dataSource = new MatTableDataSource<ITask>(this.tasks$);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
