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
import { ITask } from 'src/app/models/task';
import { TestDataService } from 'src/app/services/test-data.service';

@Component({
  selector: 'app-backlog-listing',
  templateUrl: './backlog-listing.component.html',
  styleUrls: ['./backlog-listing.component.scss'],
})
export class BacklogListingComponent implements OnInit, AfterViewInit {
  @Input() title = '';
  tasks!: ITask[];
  displayedColumns = ['currentPosition', 'name', 'id'];
  dataSource!: MatTableDataSource<ITask>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private taskService: TestDataService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.dataSource = new MatTableDataSource<ITask>(this.tasks);
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
