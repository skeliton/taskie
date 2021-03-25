import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IGroup } from '../models/group';
import { State } from '../state/app.state';
import * as TaskGroupActions from './state/task-group-list.actions';
import {
  getCurrentTaskGroup,
  getError,
  getFilteredGroups,
  getGroups,
  getShowMerged,
} from './state/task-group-list.reducer';

@Component({
  selector: 'app-task-group-list',
  templateUrl: './task-group-list.component.html',
  styleUrls: ['./task-group-list.component.scss'],
})
export class TaskGroupListComponent implements OnInit {
  pageTitle = 'Task Group List';
  showMergedView$: Observable<boolean> | undefined;
  errorMessage$: Observable<string> | undefined;
  groups$: Observable<IGroup[]> | undefined;
  filteredGroups$: Observable<IGroup[]> | undefined;
  selectedGroup$: Observable<IGroup | null | undefined> | undefined;
  //_listFilter = '';

  // get listFilter(): string {
  //   return this._listFilter;
  // }
  // set listFilter(value: string) {
  //   this._listFilter = value;
  //   this.performFilter(value);
  //   this.filteredGroups = this.listFilter
  //     ? this.performFilter(this.listFilter)
  //     : this.groups$;
  // }
  constructor(private route: ActivatedRoute, private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(TaskGroupActions.loadTaskGroups());

    this.showMergedView$ = this.store.select(getShowMerged);

    this.errorMessage$ = this.store.select(getError);

    this.groups$ = this.store.select(getGroups);

    this.selectedGroup$ = this.store.select(getCurrentTaskGroup);

    this.filteredGroups$ = this.store.select(getFilteredGroups);
  }

  checkChangedMergedView(): void {
    this.store.dispatch(TaskGroupActions.toggleMergedView());
  }

  newGroup(): void {
    this.store.dispatch(TaskGroupActions.initializeCurrentTaskGroup());
  }

  groupSelected(group: IGroup): void {
    this.store.dispatch(
      TaskGroupActions.setCurrentTaskGroup({ currentTaskGroupId: group.id })
    );
  }

  // ngOnInit(): void {
  //   this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || '';
  //   this.groups = this.groupService.getGroups();
  //   //this.filteredGroups = this.performFilter(this.listFilter);
  //   // this.groupService.getGroups().getProducts().subscribe({
  //   //   next: (products) => {
  //   //     this.products = products;
  //   //     this.filteredProducts = this.performFilter(this.listFilter);
  //   //   },
  //   //   error: (err) => (this.errorMessage = err),
  //   // });
  //   //TODO: unsubscribe
  //   this.store.select(getFilterBy).subscribe({
  //     next: (filterByString) => {
  //       console.log('filterByString: ' + filterByString);
  //     },
  //     error: (err) => console.log(err),
  //   });
  // }

  // performFilter(filterBy: string) {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   this.store.dispatch(
  //     TaskGroupActions.filterByAction({ filterByString: filterBy })
  //   );
  // }
}
