import { TaskGroupListState } from '../task-group-list/state/task-group-list.reducer';
import { TaskFeatureState } from '../tasking/state/task.reducer';
import { UserFeatureState } from '../user/state/user.reducer';

export interface State {
  taskGroupList: TaskGroupListState;
  user: UserFeatureState;
  tasking: TaskFeatureState;
}
