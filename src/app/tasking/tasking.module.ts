import { NgModule } from '@angular/core';
import { TaskingRoutingModule } from './tasking-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TaskDashboardComponent } from './task-dashboard.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [TaskDashboardComponent, TaskComponent],
  imports: [SharedModule, TaskingRoutingModule],
})
export class TaskingModule {}
