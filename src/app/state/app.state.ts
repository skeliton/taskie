// import { TaskGroupListState } from '../task-group-list/state/task-group-list.reducer';
// import { TaskFeatureState } from '../tasking/state/task.reducer';
// import { UserFeatureState } from '../user/state/user.reducer';
import { CoreState } from './core.reducer';

export interface State {
  core: CoreState;
}
