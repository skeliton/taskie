import { Injectable } from '@angular/core';
import { IGroup, IGroupUser, IUser } from '../models/group';
import { IGroupTask, ITask } from '../models/task';

// insert nums cntl+alt+n
//duplicate line ctnl+alt + up/down arrow
//row edit shift+alt+ up/down arrow

@Injectable({
  providedIn: 'root',
})
export class TestDataService {
  constructor() {}

  //Group Models
  getUsers(): IUser[] {
    return [
      { id: 1, firstName: 'Dan', lastName: 'Stewart' },
      { id: 2, firstName: 'Heidi', lastName: 'Stewart' },
      { id: 3, firstName: 'Abe', lastName: 'Stewart' },
    ];
  }

  getGroups(): IGroup[] {
    return [
      { id: 1, groupName: 'Personal', groupType: 'personal', ownerUserId: 1 },
      { id: 2, groupName: 'Personal', groupType: 'personal', ownerUserId: 2 },
      { id: 3, groupName: 'Personal', groupType: 'personal', ownerUserId: 3 },
      { id: 4, groupName: 'Family', groupType: 'team', ownerUserId: 1 },
      { id: 5, groupName: 'Waukee Schools', groupType: 'org', ownerUserId: 1 },
    ];
  }

  getGroupUsers(): IGroupUser[] {
    return [
      { id: 1, groupId: 1, userId: 1 },
      { id: 2, groupId: 2, userId: 2 },
      { id: 3, groupId: 3, userId: 3 },
      { id: 4, groupId: 4, userId: 1 },
      { id: 5, groupId: 4, userId: 2 },
      { id: 6, groupId: 4, userId: 3 },
      { id: 7, groupId: 5, userId: 1 },
      { id: 8, groupId: 5, userId: 2 },
      { id: 9, groupId: 5, userId: 3 },
    ];
  }

  //Task Models
  getGroupTasks(): IGroupTask[] {
    return [
      {
        id: 1,
        groupId: 1,
        taskId: 1,
        claimingUserId: 1,
        creatingUserid: 1,
        creatingUserReviewClosed: false,
        archive: false,
      },
      {
        id: 2,
        groupId: 2,
        taskId: 2,
        claimingUserId: 1,
        creatingUserid: 2,
        creatingUserReviewClosed: false,
        archive: false,
      },
      {
        id: 3,
        groupId: 1,
        taskId: 3,
        claimingUserId: 1,
        creatingUserid: 1,
        creatingUserReviewClosed: false,
        archive: false,
      },
      {
        id: 4,
        groupId: 1,
        taskId: 4,
        claimingUserId: 1,
        creatingUserid: 1,
        creatingUserReviewClosed: false,
        archive: false,
      },
      {
        id: 5,
        groupId: 4,
        taskId: 5,
        claimingUserId: 1,
        creatingUserid: 1,
        creatingUserReviewClosed: true,
        archive: false,
      },
      {
        id: 6,
        groupId: 4,
        taskId: 6,
        claimingUserId: 1,
        creatingUserid: 1,
        creatingUserReviewClosed: false,
        archive: false,
      },
      {
        id: 7,
        groupId: 5,
        taskId: 7,
        claimingUserId: 1,
        creatingUserid: 1,
        creatingUserReviewClosed: false,
        archive: false,
      },
      {
        id: 8,
        groupId: 5,
        taskId: 8,
        claimingUserId: 1,
        creatingUserid: 1,
        creatingUserReviewClosed: false,
        archive: false,
      },
      {
        id: 9,
        groupId: 5,
        taskId: 9,
        claimingUserId: 1,
        creatingUserid: 1,
        creatingUserReviewClosed: false,
        archive: false,
      },
    ];
  }

  // insert nums cntl+alt+n
  //duplicate line ctnl+alt + up/down arrow
  //row edit shift+alt+ up/down arrow

  getTasks(): ITask[] {
    return [
      {
        id: 1,
        name: '',
        details: '',
        originalPosition: '',
        originalPriority: '',
        currentPriority: '',
        currentPosition: 5,
        currentPositionOrder: 0,
        notes: '',
        taskTemplateId: undefined,
        taskCompleted: false,
        finalResponse: '',
        qnaTaskTemplateId: undefined,
        repeatTask: false,
        repeatDuration: '',
        flowDefinitionId: undefined,
        flowRun: false,
        aggraTask: false,
        aggraCount: 0,
      },
      {
        id: 1,
        name: '',
        details: '',
        originalPosition: '',
        originalPriority: '',
        currentPriority: '',
        currentPosition: 5,
        currentPositionOrder: 1,
        notes: '',
        taskTemplateId: undefined,
        taskCompleted: false,
        finalResponse: '',
        qnaTaskTemplateId: undefined,
        repeatTask: false,
        repeatDuration: '',
        flowDefinitionId: undefined,
        flowRun: false,
        aggraTask: false,
        aggraCount: 0,
      },
      {
        id: 2,
        name: '',
        details: '',
        originalPosition: '',
        originalPriority: '',
        currentPriority: '',
        currentPosition: 5,
        currentPositionOrder: 2,
        notes: '',
        taskTemplateId: undefined,
        taskCompleted: false,
        finalResponse: '',
        qnaTaskTemplateId: undefined,
        repeatTask: false,
        repeatDuration: '',
        flowDefinitionId: undefined,
        flowRun: false,
        aggraTask: false,
        aggraCount: 0,
      },
      {
        id: 3,
        name: '',
        details: '',
        originalPosition: '',
        originalPriority: '',
        currentPriority: '',
        currentPosition: 5,
        currentPositionOrder: 3,
        notes: '',
        taskTemplateId: undefined,
        taskCompleted: false,
        finalResponse: '',
        qnaTaskTemplateId: undefined,
        repeatTask: false,
        repeatDuration: '',
        flowDefinitionId: undefined,
        flowRun: false,
        aggraTask: false,
        aggraCount: 0,
      },
      {
        id: 4,
        name: '',
        details: '',
        originalPosition: '',
        originalPriority: '',
        currentPriority: '',
        currentPosition: 5,
        currentPositionOrder: 4,
        notes: '',
        taskTemplateId: undefined,
        taskCompleted: false,
        finalResponse: '',
        qnaTaskTemplateId: undefined,
        repeatTask: false,
        repeatDuration: '',
        flowDefinitionId: undefined,
        flowRun: false,
        aggraTask: false,
        aggraCount: 0,
      },
      {
        id: 5,
        name: '',
        details: '',
        originalPosition: '',
        originalPriority: '',
        currentPriority: '',
        currentPosition: 5,
        currentPositionOrder: 5,
        notes: '',
        taskTemplateId: undefined,
        taskCompleted: false,
        finalResponse: '',
        qnaTaskTemplateId: undefined,
        repeatTask: false,
        repeatDuration: '',
        flowDefinitionId: undefined,
        flowRun: false,
        aggraTask: false,
        aggraCount: 0,
      },
      {
        id: 6,
        name: '',
        details: '',
        originalPosition: '',
        originalPriority: '',
        currentPriority: '',
        currentPosition: 5,
        currentPositionOrder: 6,
        notes: '',
        taskTemplateId: undefined,
        taskCompleted: false,
        finalResponse: '',
        qnaTaskTemplateId: undefined,
        repeatTask: false,
        repeatDuration: '',
        flowDefinitionId: undefined,
        flowRun: false,
        aggraTask: false,
        aggraCount: 0,
      },
      {
        id: 7,
        name: '',
        details: '',
        originalPosition: '',
        originalPriority: '',
        currentPriority: '',
        currentPosition: 5,
        currentPositionOrder: 7,
        notes: '',
        taskTemplateId: undefined,
        taskCompleted: false,
        finalResponse: '',
        qnaTaskTemplateId: undefined,
        repeatTask: false,
        repeatDuration: '',
        flowDefinitionId: undefined,
        flowRun: false,
        aggraTask: false,
        aggraCount: 0,
      },
      {
        id: 8,
        name: '',
        details: '',
        originalPosition: '',
        originalPriority: '',
        currentPriority: '',
        currentPosition: 5,
        currentPositionOrder: 8,
        notes: '',
        taskTemplateId: undefined,
        taskCompleted: false,
        finalResponse: '',
        qnaTaskTemplateId: undefined,
        repeatTask: false,
        repeatDuration: '',
        flowDefinitionId: undefined,
        flowRun: false,
        aggraTask: false,
        aggraCount: 0,
      },
      {
        id: 9,
        name: '',
        details: '',
        originalPosition: '',
        originalPriority: '',
        currentPriority: '',
        currentPosition: 5,
        currentPositionOrder: 9,
        notes: '',
        taskTemplateId: undefined,
        taskCompleted: false,
        finalResponse: '',
        qnaTaskTemplateId: undefined,
        repeatTask: false,
        repeatDuration: '',
        flowDefinitionId: undefined,
        flowRun: false,
        aggraTask: false,
        aggraCount: 0,
      },
    ];
  }

  // export interface ITaskHistory{
  //   id: number;
  //   taskId: number;
  //   historyTypeId: number;
  //   historyTypeName: string;
  //   historyChangeText: string;
  //   historyChangeDeciText: string;
  //   historyChangeCentiText: string;
  //   historyChangeMilleText: string;
  //   historyChangeMicroText: string;
  // }

  // export interface IAttachment{
  //   id: number;
  //   taskId: number;
  //   attachementItemName: string;
  //   attachementItem: any;
  // }

  // export interface ITaskTemplate {
  //   id: number;
  //   name: string;
  //   taskId: number;
  //   task: ITask;
  //   type: string;
  //   subTasks: ITaskTemplateChild[];
  // }

  // export interface ITaskTemplateChild{
  //   id: number;
  //   name: string;
  //   taskTemplateId: number;
  //   taskTemplate: ITaskTemplate
  //   taskId: number;
  //   task: ITask;
  // }
}
