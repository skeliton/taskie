import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDashboardComponent } from './task-dashboard.component';
import { TaskGroupListComponent } from './task-group-list/task-group-list.component';
import { TaskGroupComponent } from './task-group/task-group.component';

const routes: Routes = [
  //  {path: 'task/:id/items/:itemId', component: TaskItemDetailComponent}
  {
    path: 'groups/:id',
    component: TaskGroupComponent,
    outlet: 'taskGroupList',
  },
  {
    path: '',
    component: TaskGroupListComponent,
    outlet: 'taskGroupList',
  },
  { path: '', component: TaskDashboardComponent },
  { path: '**', component: TaskDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskingRoutingModule {}
