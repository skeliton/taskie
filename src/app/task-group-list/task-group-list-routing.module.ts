import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskGroupListComponent } from './task-group-list.component';
import { TaskGroupComponent } from './task-group/task-group.component';

const routes: Routes = [
  //  {path: 'task/:id/items/:itemId', component: TaskItemDetailComponent}
  {
    path: 'group/:id',
    component: TaskGroupComponent,
    outlet: 'taskGroupList',
  },
  {
    path: '',
    component: TaskGroupListComponent,
    outlet: 'taskGroupList',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskGroupListRoutingModule {}
