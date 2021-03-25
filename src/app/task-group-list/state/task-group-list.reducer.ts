import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { IGroup } from 'src/app/models/group';

import * as TaskGroupActions from './task-group-list.actions';

export interface TaskGroupListState {
  showMerged: boolean;
  currentGroupId: number | null;
  groups: IGroup[];
  filteredGroups: IGroup[];
  groupFilterText: string;
  error: string;
}

const initialState: TaskGroupListState = {
  showMerged: true,
  currentGroupId: null,
  groups: [],
  filteredGroups: [],
  groupFilterText: '',
  error: '',
};

const getTaskGroupListFeatureState = createFeatureSelector<TaskGroupListState>(
  'taskGroupList'
);

export const getShowMerged = createSelector(
  getTaskGroupListFeatureState,
  (state) => state.showMerged
);

export const getCurrentTaskGroupId = createSelector(
  getTaskGroupListFeatureState,
  (state) => state.currentGroupId
);

export const getCurrentTaskGroup = createSelector(
  getTaskGroupListFeatureState,
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
        ? (state.groups.find((p) => p.id === currentGroupId))
        : null;
    }
  }
);

export const getGroups = createSelector(
  getTaskGroupListFeatureState,
  (state) => state.groups
);

export const getFilteredGroups = createSelector(
  getTaskGroupListFeatureState,
  (state) => state.filteredGroups
);

export const getGroupFilterText = createSelector(
  getTaskGroupListFeatureState,
  (state) => state.groupFilterText
);

export const getError = createSelector(
  getTaskGroupListFeatureState,
  (state) => state.error
);

export const taskGroupListReducer = createReducer<TaskGroupListState>(
  initialState,
  on(
    TaskGroupActions.toggleMergedView,
    (state): TaskGroupListState => {
      return {
        ...state,
        showMerged: !state.showMerged,
      };
    }
  ),
  on(
    TaskGroupActions.setCurrentTaskGroup,
    (state, action): TaskGroupListState => {
      return {
        ...state,
        currentGroupId: action.currentTaskGroupId,
      };
    }
  ),
  on(
    TaskGroupActions.clearCurrentTaskGroup,
    (state): TaskGroupListState => {
      return {
        ...state,
        currentGroupId: null,
      };
    }
  ),
  on(
    TaskGroupActions.initializeCurrentTaskGroup,
    (state): TaskGroupListState => {
      return {
        ...state,
        currentGroupId: 0,
      };
    }
  ),
  on(
    TaskGroupActions.loadTaskGroupsSuccess,
    (state, action): TaskGroupListState => {
      return {
        ...state,
        groups: action.groups,
        error: '',
      };
    }
  ),
  on(
    TaskGroupActions.setGroupFilterText,
    (state, action): TaskGroupListState => {
      return {
        ...state,
        groupFilterText: action.groupFilterText.toLocaleLowerCase(),
        filteredGroups: state.groupFilterText
          ? state.groups.filter(
              (group: IGroup) =>
                group.groupName
                  .toLocaleLowerCase()
                  .indexOf(state.groupFilterText) !== -1
            )
          : state.groups,
      };
    }
  ),
  on(
    TaskGroupActions.loadTaskGroupsFailure,
    (state, action): TaskGroupListState => {
      return {
        ...state,
        groups: [],
        filteredGroups: [],
        error: action.error,
      };
    }
  ),
  on(
    TaskGroupActions.updateTaskGroupSuccess,
    (state, action): TaskGroupListState => {
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
    (state, action): TaskGroupListState => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  // After a create, the currentTaskGroup is the new product.
  on(
    TaskGroupActions.createTaskGroupSuccess,
    (state, action): TaskGroupListState => {
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
    (state, action): TaskGroupListState => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  // After a delete, the currentTaskGroup is null.
  on(
    TaskGroupActions.deleteTaskGroupSuccess,
    (state, action): TaskGroupListState => {
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
    (state, action): TaskGroupListState => {
      return {
        ...state,
        error: action.error,
      };
    }
  )
);
