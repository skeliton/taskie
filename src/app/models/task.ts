import { IGroup } from './group';

export interface IGroupTask {
  id: number;
  groupId: number;
  taskId: number;
  claimingUserId?: number;
  creatingUserId: number;
  creatingUserReviewClosed: boolean;
  archive: boolean;
}

export interface ITask {
  id: number;
  name: string;
  details: string;
  originalPriority: string;
  originalPosition: string;
  currentPriority: string;
  currentPosition: number;
  currentPositionOrder: number;
  notes: string;
  taskTemplateId?: number;
  taskCompleted: boolean;
  finalResponse: string;
  qnaTaskTemplateId?: number;
  repeatTask: boolean;
  repeatDuration: string;
  flowDefinitionId?: number;
  flowRun: boolean;
  aggraTask: boolean;
  aggraCount: number;
}

export interface ITaskHistory {
  id: number;
  taskId: number;
  historyTypeId: number;
  historyTypeName: string;
  historyChangeText: string;
  historyChangeDeciText: string;
  historyChangeCentiText: string;
  historyChangeMilleText: string;
  historyChangeMicroText: string;
}

export interface IAttachment {
  id: number;
  taskId: number;
  attachementItemName: string;
  attachementItem: any;
}

export interface ITaskTemplate {
  id: number;
  name: string;
  taskId: number;
  type: string;
}

export interface ITaskTemplateChild {
  id: number;
  name: string;
  taskTemplateId: number;
  taskId: number;
}
