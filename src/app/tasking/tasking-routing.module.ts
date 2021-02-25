import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDashboardComponent } from './task-dashboard.component';

const routes: Routes = [
  { path: '', component: TaskDashboardComponent },
  { path: '**', component: TaskDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskingRoutingModule { }
