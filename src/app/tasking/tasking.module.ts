import { NgModule } from '@angular/core';
import { TaskingRoutingModule } from './tasking-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TaskDashboardComponent } from './task-dashboard.component';
import { TaskComponent } from './task/task.component';
import { BacklogListingComponent } from './backlog-listing/backlog-listing.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { taskReducer } from './state/task.reducer';
import { TaskEffects } from './state/task.effects';

@NgModule({
  declarations: [
    TaskDashboardComponent,
    TaskComponent,
    BacklogListingComponent,
  ],
  imports: [
    SharedModule,
    TaskingRoutingModule,
    StoreModule.forFeature('tasking', taskReducer),
    EffectsModule.forFeature([TaskEffects]),
  ],
})
export class TaskingModule {}
