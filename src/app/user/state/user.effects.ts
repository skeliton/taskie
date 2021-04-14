import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { combineLatest, of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { UserService } from 'src/app/user/services/user.service';
import * as UserActions from './user.actions';
import * as GroupActions from 'src/app/task-group-list/state/task-group-list.actions';
import * as TaskActions from 'src/app/tasking/state/task.actions';

@Injectable({ providedIn: 'root' })
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadCurrentUserById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadCurrentUserById),
      mergeMap((action) => {
        return this.userService.getUsersById(action.userId).pipe(
          map((user) => UserActions.loadUserByIdSuccess({ user })),
          // tap((user) => console.log('DEBUG: ' + JSON.stringify(user))),
          // map((user) => GroupActions.loadTaskGroupsByUserId({userId: user.user.id})),
          // tap((user) => console.log('DEBUG: ' + JSON.stringify(user))),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        );
      })
    );
  });

  loadGroupsForSuccessfulUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUserByIdSuccess),
      map((user) =>
        GroupActions.loadTaskGroupsByUserId({ userId: user.user.id })
      )
    );
  });

  loadTasksForSuccessfulUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUserByIdSuccess),
      map((user) =>
        TaskActions.loadTasksByUserId({ userId: user.user.id })
      )
    );
  });

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => UserActions.loadUsersSuccess({ users })),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        )
      )
    );
  });

  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.updateUser),
      concatMap((action) =>
        this.userService.updateUser(action.user).pipe(
          map((user) => UserActions.updateUserSuccess({ user })),
          catchError((error) => of(UserActions.updateUserFailure({ error })))
        )
      )
    );
  });

  createUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.createUser),
      concatMap((action) =>
        this.userService.createUser(action.user).pipe(
          map((user) => UserActions.createUserSuccess({ user })),
          catchError((error) => of(UserActions.createUserFailure({ error })))
        )
      )
    );
  });

  deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.deleteUser),
      mergeMap((action) =>
        this.userService.deleteUser(action.userId).pipe(
          map(() =>
            UserActions.deleteUserSuccess({
              userId: action.userId,
            })
          ),
          catchError((error) => of(UserActions.deleteUserFailure({ error })))
        )
      )
    );
  });
}
