import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { TaskService } from 'src/app/services/task.service';
import * as TaskActions from './task.actions';

@Injectable({ providedIn: 'root' })
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {}

  loadCurrentTaskById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.loadCurrentTaskById),
      mergeMap((action) =>
        this.taskService.getTasksById(action.taskId).pipe(
          map((task) => TaskActions.loadTaskByIdSuccess({ task })),
          catchError((error) => of(TaskActions.loadTasksFailure({ error })))
        )
      )
    );
  });

  loadTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      mergeMap(() =>
        this.taskService.getTasks().pipe(
          map((tasks) => TaskActions.loadTasksSuccess({ tasks })),
          catchError((error) => of(TaskActions.loadTasksFailure({ error })))
        )
      )
    );
  });

  updateTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.updateTask),
      concatMap((action) =>
        this.taskService.updateTask(action.task).pipe(
          map((task) => TaskActions.updateTaskSuccess({ task })),
          catchError((error) => of(TaskActions.updateTaskFailure({ error })))
        )
      )
    );
  });

  createTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.createTask),
      concatMap((action) =>
        this.taskService.createTask(action.task).pipe(
          map((task) => TaskActions.createTaskSuccess({ task })),
          catchError((error) => of(TaskActions.createTaskFailure({ error })))
        )
      )
    );
  });

  deleteTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.deleteTask),
      mergeMap((action) =>
        this.taskService.deleteTask(action.taskId).pipe(
          map(() =>
            TaskActions.deleteTaskSuccess({
              taskId: action.taskId,
            })
          ),
          catchError((error) => of(TaskActions.deleteTaskFailure({ error })))
        )
      )
    );
  });
}
