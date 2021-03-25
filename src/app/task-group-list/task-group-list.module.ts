import { NgModule } from '@angular/core';

import { TaskGroupListRoutingModule } from './task-group-list-routing.module';
import { TaskGroupListComponent } from './task-group-list.component';
import { SharedModule } from '../shared/shared.module';
import { TaskGroupListItemComponent } from './task-group-list-item/task-group-list-item.component';
import { TaskGroupComponent } from './task-group/task-group.component';
import { StoreModule } from '@ngrx/store';
import { taskGroupListReducer } from './state/task-group-list.reducer';

@NgModule({
  declarations: [
    TaskGroupListComponent,
    TaskGroupListItemComponent,
    TaskGroupComponent,
  ],
  imports: [
    SharedModule,
    TaskGroupListRoutingModule,
    StoreModule.forFeature('taskGroupList', { taskGroupListReducer }),
  ],
})
export class TaskGroupListModule {}
