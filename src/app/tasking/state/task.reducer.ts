import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { ITask } from 'src/app/models/task';

import * as TaskActions from './task.actions';

export interface TaskFeatureState {
  currentTaskId: number | null;
  task: ITask | null;
  error: string;
  associatedTasks: ITask[] | null;
}

const initialState: TaskFeatureState = {
  currentTaskId: null,
  task: null,
  error: '',
  associatedTasks: [],
};

const getTaskFeatureState = createFeatureSelector<TaskFeatureState>('tasking');

export const getCurrentTaskId = createSelector(
  getTaskFeatureState,
  (state) => state.currentTaskId
);

export const getCurrentTask = createSelector(
  getTaskFeatureState,
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

export const getError = createSelector(
  getTaskFeatureState,
  (state) => state.error
);

export const taskReducer = createReducer<TaskFeatureState>(
  initialState,
  on(
    TaskActions.loadCurrentTaskById,
    (state, action): TaskFeatureState => {
      return {
        ...state,
        currentTaskId: action.taskId,
      };
    }
  ),
  on(
    TaskActions.clearCurrentTask,
    (state): TaskFeatureState => {
      return {
        ...state,
        currentTaskId: null,
        task: null,
      };
    }
  ),
  on(
    TaskActions.initializeCurrentTask,
    (state): TaskFeatureState => {
      return {
        ...state,
        currentTaskId: 0,
      };
    }
  ),
  on(
    TaskActions.loadTaskByIdSuccess,
    (state, action): TaskFeatureState => {
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
    (state, action): TaskFeatureState => {
      return {
        ...state,
        associatedTasks: action.tasks,
        error: '',
      };
    }
  ),
  on(
    TaskActions.loadTasksFailure,
    (state, action): TaskFeatureState => {
      return {
        ...state,
        associatedTasks: [],
        error: action.error,
      };
    }
  ),
  on(
    TaskActions.updateTaskSuccess,
    (state, action): TaskFeatureState => {
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
    (state, action): TaskFeatureState => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  // After a create, the currentTask is the new product.
  on(
    TaskActions.createTaskSuccess,
    (state, action): TaskFeatureState => {
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
    (state, action): TaskFeatureState => {
      return {
        ...state,
        error: action.error,
      };
    }
  )
);
