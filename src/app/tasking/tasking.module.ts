import { NgModule } from '@angular/core';
import { TaskingRoutingModule } from './tasking-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TaskDashboardComponent } from './task-dashboard.component';


@NgModule({
  declarations: [TaskDashboardComponent],
  imports: [
    SharedModule,
    TaskingRoutingModule
  ]
})
export class TaskingModule { }
