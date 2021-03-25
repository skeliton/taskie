import { createAction, props } from '@ngrx/store';
import { IGroup } from 'src/app/models/group';

export const toggleMergedView = createAction(
  '[TaskGroupList] Toggle Merged View'
);

export const setCurrentTaskGroup = createAction(
  '[TaskGroupList] Set Current TaskGroup',
  props<{ currentTaskGroupId: number }>()
);

export const setGroupFilterText = createAction(
  '[TaskGroupList] Set Group Filter Text',
  props<{ groupFilterText: string }>()
);

export const clearCurrentTaskGroup = createAction(
  '[TaskGroupList] Clear Current TaskGroup'
);

export const initializeCurrentTaskGroup = createAction(
  '[TaskGroupList] Initialize Current TaskGroup'
);

export const loadTaskGroups = createAction('[TaskGroupList] Load');

export const loadTaskGroupsSuccess = createAction(
  '[TaskGroupList] Load Success',
  props<{ groups: IGroup[] }>()
);

export const loadTaskGroupsFailure = createAction(
  '[TaskGroupList] Load Fail',
  props<{ error: string }>()
);

export const updateTaskGroup = createAction(
  '[TaskGroupList] Update TaskGroup',
  props<{ group: IGroup }>()
);

export const updateTaskGroupSuccess = createAction(
  '[TaskGroupList] Update TaskGroup Success',
  props<{ group: IGroup }>()
);

export const updateTaskGroupFailure = createAction(
  '[TaskGroupList] Update TaskGroup Fail',
  props<{ error: string }>()
);

export const createTaskGroup = createAction(
  '[TaskGroupList] Create TaskGroup',
  props<{ group: IGroup }>()
);

export const createTaskGroupSuccess = createAction(
  '[TaskGroupList] Create TaskGroup Success',
  props<{ group: IGroup }>()
);

export const createTaskGroupFailure = createAction(
  '[TaskGroupList] Create TaskGroup Fail',
  props<{ error: string }>()
);

export const deleteTaskGroup = createAction(
  '[TaskGroupList] Delete TaskGroup',
  props<{ taskGroupId: number }>()
);

export const deleteTaskGroupSuccess = createAction(
  '[TaskGroupList] Delete TaskGroup Success',
  props<{ taskgroupId: number }>()
);

export const deleteTaskGroupFailure = createAction(
  '[TaskGroupList] Delete TaskGroup Fail',
  props<{ error: string }>()
);
