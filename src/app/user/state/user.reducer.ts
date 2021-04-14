// import {
//   createAction,
//   createFeatureSelector,
//   createReducer,
//   createSelector,
//   on,
//   props,
// } from '@ngrx/store';
// import { IUser } from 'src/app/models/group';

// import * as UserActions from './user.actions';

// export interface UserFeatureState {
//   isLoggedIn: boolean | null;
//   currentUserId: number | null;
//   user: IUser | null;
//   error: string;
//   associatedUsers: IUser[] | null;
// }

// const initialState: UserFeatureState = {
//   isLoggedIn: false,
//   currentUserId: null,
//   user: null,
//   error: '',
//   associatedUsers: [],
// };

// const getUserFeatureState = createFeatureSelector<UserFeatureState>('user');

// export const getLoggedIn = createSelector(
//   getUserFeatureState,
//   (state) => state.isLoggedIn
// );

// export const getCurrentUserId = createSelector(
//   getUserFeatureState,
//   (state) => state.currentUserId
// );

// export const getCurrentUser = createSelector(
//   getUserFeatureState,
//   getCurrentUserId,
//   (state, currentUserId) => {
//     if (currentUserId === 0) {
//       return {
//         id: 0,
//       };
//     } else {
//       return currentUserId ? state.user : null;
//     }
//   }
// );

// export const getError = createSelector(
//   getUserFeatureState,
//   (state) => state.error
// );

// export const userReducer = createReducer<UserFeatureState>(
//   initialState,
//   on(
//     UserActions.loadCurrentUserById,
//     (state, action): UserFeatureState => {
//       return {
//         ...state,
//         currentUserId: action.userId,
//         isLoggedIn: true,
//       };
//     }
//   ),
//   on(
//     UserActions.clearCurrentUser,
//     (state): UserFeatureState => {
//       return {
//         ...state,
//         currentUserId: null,
//         user: null,
//         isLoggedIn: false,
//       };
//     }
//   ),
//   on(
//     UserActions.initializeCurrentUser,
//     (state): UserFeatureState => {
//       return {
//         ...state,
//         currentUserId: 0,
//       };
//     }
//   ),
//   on(
//     UserActions.loadUserByIdSuccess,
//     (state, action): UserFeatureState => {
//       return {
//         ...state,
//         currentUserId: action.user.id,
//         user: action.user,
//         error: '',
//       };
//     }
//   ),
//   on(
//     UserActions.loadUsersSuccess,
//     (state, action): UserFeatureState => {
//       return {
//         ...state,
//         associatedUsers: action.users,
//         error: '',
//       };
//     }
//   ),
//   on(
//     UserActions.loadUsersFailure,
//     (state, action): UserFeatureState => {
//       return {
//         ...state,
//         associatedUsers: [],
//         error: action.error,
//       };
//     }
//   ),
//   on(
//     UserActions.updateUserSuccess,
//     (state, action): UserFeatureState => {
//       return {
//         ...state,
//         user: action.user,
//         currentUserId: action.user.id,
//         error: '',
//       };
//     }
//   ),
//   on(
//     UserActions.updateUserFailure,
//     (state, action): UserFeatureState => {
//       return {
//         ...state,
//         error: action.error,
//       };
//     }
//   ),
//   // After a create, the currentUser is the new product.
//   on(
//     UserActions.createUserSuccess,
//     (state, action): UserFeatureState => {
//       return {
//         ...state,
//         user: action.user,
//         currentUserId: action.user.id,
//         error: '',
//       };
//     }
//   ),
//   on(
//     UserActions.createUserFailure,
//     (state, action): UserFeatureState => {
//       return {
//         ...state,
//         error: action.error,
//       };
//     }
//   )
// );
