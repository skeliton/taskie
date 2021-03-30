import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import * as UserActions from './user.actions';

@Injectable({ providedIn: 'root' })
export class UserListEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadCurrentUserById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadCurrentUserById),
      mergeMap((action) =>
        this.userService.getUsersById(action.userId).pipe(
          map((user) => UserActions.loadUserByIdSuccess({ user })),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        )
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
