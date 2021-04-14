import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { IGroup, IUser } from 'src/app/models/group';
import { ITask } from '../models/task';

import * as UserActions from 'src/app/user/state/user.actions';
import * as TaskActions from 'src/app/tasking/state/task.actions';
import * as TaskGroupActions from 'src/app/task-group-list/state/task-group-list.actions';

export interface CoreState {
  user: IUser | null;
  error: string;
  associatedUsers: IUser[] | null;
  currentTaskId: number | null;
  task: ITask | null;
  associatedTasks: ITask[] | null;
  showMerged: boolean;
  currentGroupId: number | null;
  groups: IGroup[];
  groupFilterText: string;
}

const initialState: CoreState = {
  user: null,
  error: '',
  associatedUsers: [],
  currentTaskId: null,
  task: null,
  associatedTasks: [],
  showMerged: true,
  currentGroupId: null,
  groups: [],
  groupFilterText: '',
};

const getCoreState = createFeatureSelector<CoreState>('core');

export const getShowMerged = createSelector(
  getCoreState,
  (state) => state.showMerged
);

export const getCurrentTaskGroupId = createSelector(
  getCoreState,
  (state) => state.currentGroupId
);

export const getCurrentTaskGroup = createSelector(
  getCoreState,
  getCurrentTaskGroupId,
  (state, currentGroupId) => {
    if (currentGroupId === 0) {
      return {
        id: 0,
        groupName: '',
        groupType: 'personal',
        ownerUserId: 0,
      };
    } else {
      return currentGroupId
        ? state.groups.find((p) => p.id === currentGroupId)
        : null;
    }
  }
);

export const getGroups = createSelector(getCoreState, (state) => {
  console.log('STATE:' + JSON.stringify(state.groups));
  console.log('STATE:' + JSON.stringify(state.showMerged));
  return state.groups;
});

export const getFilteredGroups = createSelector(getCoreState, (state) =>
  state.groupFilterText
    ? state.groups.filter(
        (group: IGroup) =>
          group.groupName.toLocaleLowerCase().indexOf(state.groupFilterText) !==
          -1
      )
    : state.groups
);

export const getGroupFilterText = createSelector(
  getCoreState,
  (state) => state.groupFilterText
);

export const getCurrentTaskId = createSelector(
  getCoreState,
  (state) => state.currentTaskId
);

export const getCurrentTask = createSelector(
  getCoreState,
  getCurrentTaskId,
  (state, currentTaskId) => {
    if (currentTaskId === 0) {
      return {
        id: 0,
      };
    } else {
      return currentTaskId ? state.task : null;
    }
  }
);

export const getCurrentUser = createSelector(
  getCoreState,
  (state) => state.user
);

export const getError = createSelector(getCoreState, (state) => state.error);

export const coreReducer = createReducer<CoreState>(
  initialState,
  on(
    TaskGroupActions.toggleMergedView,
    (state): CoreState => {
      return {
        ...state,
        showMerged: !state.showMerged,
      };
    }
  ),
  on(
    TaskGroupActions.setCurrentTaskGroup,
    (state, action): CoreState => {
      return {
        ...state,
        currentGroupId: action.currentTaskGroupId,
      };
    }
  ),
  on(
    TaskGroupActions.clearCurrentTaskGroup,
    (state): CoreState => {
      return {
        ...state,
        currentGroupId: null,
      };
    }
  ),
  on(
    TaskGroupActions.initializeCurrentTaskGroup,
    (state): CoreState => {
      return {
        ...state,
        currentGroupId: 0,
      };
    }
  ),
  on(
    TaskGroupActions.loadTaskGroupsSuccess,
    (state, action): CoreState => {
      return {
        ...state,
        groups: action.groups,
        error: '',
      };
    }
  ),
  on(
    TaskGroupActions.setGroupFilterText,
    (state, action): CoreState => {
      return {
        ...state,
        groupFilterText: action.groupFilterText.toLocaleLowerCase(),
      };
    }
  ),
  on(
    TaskGroupActions.loadTaskGroupsFailure,
    (state, action): CoreState => {
      return {
        ...state,
        groups: [],
        error: action.error,
      };
    }
  ),
  on(
    TaskGroupActions.updateTaskGroupSuccess,
    (state, action): CoreState => {
      const updatedTaskGroups = state.groups.map((item) =>
        action.group.id === item.id ? action.group : item
      );
      return {
        ...state,
        groups: updatedTaskGroups,
        currentGroupId: action.group.id,
        error: '',
      };
    }
  ),
  on(
    TaskGroupActions.updateTaskGroupFailure,
    (state, action): CoreState => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  // After a create, the currentTaskGroup is the new product.
  on(
    TaskGroupActions.createTaskGroupSuccess,
    (state, action): CoreState => {
      return {
        ...state,
        groups: [...state.groups, action.group],
        currentGroupId: action.group.id,
        error: '',
      };
    }
  ),
  on(
    TaskGroupActions.createTaskGroupFailure,
    (state, action): CoreState => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  // After a delete, the currentTaskGroup is null.
  on(
    TaskGroupActions.deleteTaskGroupSuccess,
    (state, action): CoreState => {
      return {
        ...state,
        groups: state.groups.filter((group) => group.id !== action.taskgroupId),
        currentGroupId: null,
        error: '',
      };
    }
  ),
  on(
    TaskGroupActions.deleteTaskGroupFailure,
    (state, action): CoreState => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  on(
    TaskActions.loadCurrentTaskById,
    (state, action): CoreState => {
      return {
        ...state,
        currentTaskId: action.taskId,
      };
    }
  ),
  on(
    TaskActions.clearCurrentTask,
    (state): CoreState => {
      return {
        ...state,
        currentTaskId: null,
        task: null,
      };
    }
  ),
  on(
    TaskActions.initializeCurrentTask,
    (state): CoreState => {
      return {
        ...state,
        currentTaskId: 0,
      };
    }
  ),
  on(
    TaskActions.loadTaskByIdSuccess,
    (state, action): CoreState => {
      return {
        ...state,
        currentTaskId: action.task.id,
        task: action.task,
        error: '',
      };
    }
  ),
  on(
    TaskActions.loadTasksSuccess,
    (state, action): CoreState => {
      return {
        ...state,
        associatedTasks: action.tasks,
        error: '',
      };
    }
  ),
  on(
    TaskActions.loadTasksFailure,
    (state, action): CoreState => {
      return {
        ...state,
        associatedTasks: [],
        error: action.error,
      };
    }
  ),
  on(
    TaskActions.updateTaskSuccess,
    (state, action): CoreState => {
      return {
        ...state,
        task: action.task,
        currentTaskId: action.task.id,
        error: '',
      };
    }
  ),
  on(
    TaskActions.updateTaskFailure,
    (state, action): CoreState => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  // After a create, the currentTask is the new product.
  on(
    TaskActions.createTaskSuccess,
    (state, action): CoreState => {
      return {
        ...state,
        task: action.task,
        currentTaskId: action.task.id,
        error: '',
      };
    }
  ),
  on(
    TaskActions.createTaskFailure,
    (state, action): CoreState => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  on(
    UserActions.loadCurrentUserById,
    (state, action): CoreState => {
      return {
        ...state
      };
    }
  ),
  on(
    UserActions.clearCurrentUser,
    (state): CoreState => {
      return {
        ...state,
        user: null,
      };
    }
  ),
  on(
    UserActions.initializeCurrentUser,
    (state): CoreState => {
      return {
        ...state
      };
    }
  ),
  on(
    UserActions.loadUserByIdSuccess,
    (state, action): CoreState => {
      return {
        ...state,
        user: action.user,
        error: '',
      };
    }
  ),
  on(
    UserActions.loadUsersSuccess,
    (state, action): CoreState => {
      return {
        ...state,
        associatedUsers: action.users,
        error: '',
      };
    }
  ),
  on(
    UserActions.loadUsersFailure,
    (state, action): CoreState => {
      return {
        ...state,
        associatedUsers: [],
        error: action.error,
      };
    }
  ),
  on(
    UserActions.updateUserSuccess,
    (state, action): CoreState => {
      return {
        ...state,
        user: action.user,
        error: '',
      };
    }
  ),
  on(
    UserActions.updateUserFailure,
    (state, action): CoreState => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  // After a create, the currentUser is the new product.
  on(
    UserActions.createUserSuccess,
    (state, action): CoreState => {
      return {
        ...state,
        user: action.user,
        error: '',
      };
    }
  ),
  on(
    UserActions.createUserFailure,
    (state, action): CoreState => {
      return {
        ...state,
        error: action.error,
      };
    }
  )
);
