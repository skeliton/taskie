import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from 'src/app/tasking/services/task.service';
import * as TaskGroupActions from './task-group-list.actions';
import * as TaskActions from 'src/app/tasking/state/task.actions';
import { GroupService } from 'src/app/task-group-list/services/group.service';

@Injectable({ providedIn: 'root' })
export class TaskGroupListEffects {
  constructor(private actions$: Actions, private groupService: GroupService) {}

  loadTaskGroups$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskGroupActions.loadTaskGroups),
      mergeMap(() =>
        this.groupService.getGroups().pipe(
          map((groups) => TaskGroupActions.loadTaskGroupsSuccess({ groups })),
          catchError((error) =>
            of(TaskGroupActions.loadTaskGroupsFailure({ error }))
          )
        )
      )
    );
  });

  loadGroupsByUserId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskGroupActions.loadTaskGroupsByUserId),
      mergeMap((action) => {
        return this.groupService.getGroupsByUserId(action.userId).pipe(
          map((groups) => TaskGroupActions.loadTaskGroupsSuccess({ groups })),
          catchError((error) =>
            of(TaskGroupActions.loadTaskGroupsFailure({ error }))
          )
        );
      })
    );
  });

  updateTaskGroup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskGroupActions.updateTaskGroup),
      concatMap((action) =>
        this.groupService.updateGroup(action.group).pipe(
          map((group) => TaskGroupActions.updateTaskGroupSuccess({ group })),
          catchError((error) =>
            of(TaskGroupActions.updateTaskGroupFailure({ error }))
          )
        )
      )
    );
  });

  createTaskGroup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskGroupActions.createTaskGroup),
      concatMap((action) =>
        this.groupService.createGroup(action.group).pipe(
          map((group) => TaskGroupActions.createTaskGroupSuccess({ group })),
          catchError((error) =>
            of(TaskGroupActions.createTaskGroupFailure({ error }))
          )
        )
      )
    );
  });

  deleteTaskGroup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskGroupActions.deleteTaskGroup),
      mergeMap((action) =>
        this.groupService.deleteGroup(action.taskGroupId).pipe(
          map(() =>
            TaskGroupActions.deleteTaskGroupSuccess({
              taskgroupId: action.taskGroupId,
            })
          ),
          catchError((error) =>
            of(TaskGroupActions.deleteTaskGroupFailure({ error }))
          )
        )
      )
    );
  });
}
