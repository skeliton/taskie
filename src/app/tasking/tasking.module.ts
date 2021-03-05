import { NgModule } from '@angular/core';
import { TaskingRoutingModule } from './tasking-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TaskDashboardComponent } from './task-dashboard.component';
import { TaskComponent } from './task/task.component';
import { TaskGroupListComponent } from './task-group-list/task-group-list.component';
import { TaskGroupListItemComponent } from './task-group-list-item/task-group-list-item.component';
import { TaskGroupComponent } from './task-group/task-group.component';

@NgModule({
  declarations: [
    TaskDashboardComponent,
    TaskComponent,
    TaskGroupListComponent,
    TaskGroupListItemComponent,
    TaskGroupComponent,
  ],
  imports: [SharedModule, TaskingRoutingModule],
})
export class TaskingModule {}
