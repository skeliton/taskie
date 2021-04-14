import { NgModule } from '@angular/core';

import { TaskGroupListRoutingModule } from './task-group-list-routing.module';
import { TaskGroupListComponent } from './task-group-list.component';
import { SharedModule } from '../shared/shared.module';
import { TaskGroupListItemComponent } from './task-group-list-item/task-group-list-item.component';
import { TaskGroupComponent } from './task-group/task-group.component';
import { StoreModule } from '@ngrx/store';
import { coreReducer } from 'src/app/state/core.reducer';
import { HttpClientModule } from '@angular/common/http';
import { TaskGroupListEffects } from './state/task-group-list.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    TaskGroupListComponent,
    TaskGroupListItemComponent,
    TaskGroupComponent,
  ],
  imports: [
    SharedModule,
    TaskGroupListRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('core', coreReducer),
    EffectsModule.forFeature([TaskGroupListEffects]),
  ],
  exports: [],
})
export class TaskGroupListModule {}
