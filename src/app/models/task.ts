import { IGroup } from "./group";

export interface IGroupTask {
  id: number;
  groupId: number;
  group: IGroup;
  taskId: number;
  task: ITask;
  claimingUserId?:number;
  creatingUserid: number;
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
  taskHistory: ITaskHistory[];
  notes: string;
  taskTemplate: ITaskTemplate;
  taskCompleted: boolean;
  finalResponse: string;
  qaTaskTemplate: ITaskTemplate;
  taskAttachements: IAttachment[];
  taskWorkAttachments: IAttachment[];
  repeatTask: boolean;
  repeatDuration: string;
  flowDefinitionId: number;
  flowRun: boolean;
  aggraTask: boolean;
  aggraCount: number;
}

export interface ITaskHistory{
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

export interface IAttachment{
  id: number;
  taskId: number;
  attachementItemName: string;
  attachementItem: any;
}

export interface ITaskTemplate {
  id: number;
  name: string;
  taskId: number;
  task: ITask;
  type: string;
  subTasks: ITaskTemplateChild[];
}

export interface ITaskTemplateChild{
  id: number;
  name: string;
  taskTemplateId: number;
  taskTemplate: ITaskTemplate
  taskId: number;
  task: ITask;
}


