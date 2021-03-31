import { createAction, props } from '@ngrx/store';
import { ITask } from 'src/app/models/task';

export const loadCurrentTaskById = createAction(
  '[Task] LoadById',
  props<{ taskId: number }>()
);
export const initializeCurrentTask = createAction(
  '[Task] Initialize Current Task'
);

export const clearCurrentTask = createAction('[Task] Clear Current Task');

export const loadTasks = createAction('[Task] Load');

export const loadTaskByIdSuccess = createAction(
  '[Task] LoadById Success',
  props<{ task: ITask }>()
);

export const loadTasksSuccess = createAction(
  '[Task] Load Success',
  props<{ tasks: ITask[] }>()
);

export const loadTasksFailure = createAction(
  '[Task] Load Fail',
  props<{ error: string }>()
);

export const updateTask = createAction(
  '[Task] Update Task',
  props<{ task: ITask }>()
);

export const updateTaskSuccess = createAction(
  '[Task] Update Task Success',
  props<{ task: ITask }>()
);

export const updateTaskFailure = createAction(
  '[Task] Update Task Fail',
  props<{ error: string }>()
);

export const createTask = createAction(
  '[Task] Create Task',
  props<{ task: ITask }>()
);

export const createTaskSuccess = createAction(
  '[Task] Create Task Success',
  props<{ task: ITask }>()
);

export const createTaskFailure = createAction(
  '[Task] Create Task Fail',
  props<{ error: string }>()
);

export const deleteTask = createAction(
  '[Task] Delete Task',
  props<{ taskId: number }>()
);

export const deleteTaskSuccess = createAction(
  '[Task] Delete Task Success',
  props<{ taskId: number }>()
);

export const deleteTaskFailure = createAction(
  '[Task] Delete Task Fail',
  props<{ error: string }>()
);
