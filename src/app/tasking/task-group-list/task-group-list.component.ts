import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGroup } from 'src/app/models/group';
import { IGroupTask } from 'src/app/models/task';
import { TestDataService } from 'src/app/services/test-data.service';

@Component({
  selector: 'app-task-group-list',
  templateUrl: './task-group-list.component.html',
  styleUrls: ['./task-group-list.component.scss'],
})
export class TaskGroupListComponent implements OnInit {
  pageTitle = 'Task Group List';
  errorMessage = '';
  _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredGroups = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.groups;
  }

  filteredGroups: IGroup[] = [];
  groups: IGroup[] = [];

  constructor(
    private groupService: TestDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || '';
    this.groups = this.groupService.getGroups();
    this.filteredGroups = this.performFilter(this.listFilter);
    // this.groupService.getGroups().getProducts().subscribe({
    //   next: (products) => {
    //     this.products = products;
    //     this.filteredProducts = this.performFilter(this.listFilter);
    //   },
    //   error: (err) => (this.errorMessage = err),
    // });
  }

  performFilter(filterBy: string): IGroup[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.groups.filter(
      (group: IGroup) =>
        group.groupName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
}
