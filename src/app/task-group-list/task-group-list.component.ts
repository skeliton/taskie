import { Component, OnDestroy, OnInit } from '@angular/core';
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
  getGroupFilterText,
  getGroups,
  getShowMerged,
} from 'src/app/state/core.reducer';

@Component({
  selector: 'app-task-group-list',
  templateUrl: './task-group-list.component.html',
  styleUrls: ['./task-group-list.component.scss'],
})
export class TaskGroupListComponent implements OnInit, OnDestroy {
  pageTitle = 'Task Group List';
  showMergedView$: Observable<boolean> | undefined;
  groupFilterText$: Observable<string> | undefined;
  errorMessage$: Observable<string> | undefined;
  groups$: Observable<IGroup[]> | undefined;
  filteredGroups$: Observable<IGroup[]> | undefined;
  selectedGroup$: Observable<IGroup | null | undefined> | undefined;
  _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value.toLocaleLowerCase();
    this.store.dispatch(
      TaskGroupActions.setGroupFilterText({ groupFilterText: this._listFilter })
    );
  }
  constructor(private route: ActivatedRoute, private store: Store<State>) {}

  ngOnInit(): void {
    this.showMergedView$ = this.store.select(getShowMerged);

    this.errorMessage$ = this.store.select(getError);

    this.groupFilterText$ = this.store.select(getGroupFilterText);

    this.groups$ = this.store.select(getGroups);

    this.selectedGroup$ = this.store.select(getCurrentTaskGroup);

    this.filteredGroups$ = this.store.select(getFilteredGroups);

    //this.store.dispatch(TaskGroupActions.loadTaskGroups());
  }

  ngOnDestroy(): void {
    //clear filter to clean state
    this.listFilter = '';
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

  setFilterText(value: string): void {
    this.store.dispatch(
      TaskGroupActions.setGroupFilterText({ groupFilterText: value })
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
