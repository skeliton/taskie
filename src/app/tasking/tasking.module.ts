import { NgModule } from '@angular/core';
import { TaskingRoutingModule } from './tasking-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TaskDashboardComponent } from './task-dashboard.component';
import { TaskComponent } from './task/task.component';
import { BacklogListingComponent } from './backlog-listing/backlog-listing.component';

@NgModule({
  declarations: [TaskDashboardComponent, TaskComponent, BacklogListingComponent],
  imports: [SharedModule, TaskingRoutingModule],
})
export class TaskingModule {}
