import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { IGroup, IGroupUser, IUser } from '../models/group';
import { LoggerService } from './logger.service';
import { TestDataService } from './test-data.service';

@Injectable({
  providedIn: 'root',
})
export class UserGroupService {
  constructor(
    private loggerService: LoggerService,
    private testDataService: TestDataService
  ) {}

  getUserById(id: number): IUser {
    let user = this.testDataService.getUsers().find((x) => {
      return x.id === id;
    });
    if (user === undefined) {
      let err = new Error('Unknown User Id');
      this.loggerService.handleError(err);
      throw err;
    }
    return user;
  }

  getGroupById(id: number): IGroup | undefined {
    return this.testDataService.getGroups().find((x) => {
      return x.id === id;
    });
  }

  getUserGroupsByUserId(userId: number): IGroupUser[] {
    return this.testDataService
      .getGroupUsers()
      .filter((x) => x.userId === userId);
  }

  getGroupsByUserId(userId: number): IGroup[] {
    let groups: IGroup[] = new Array();
    this.getUserGroupsByUserId(userId).forEach((x) => {
      let group = this.getGroupById(x.groupId);
      if (group !== undefined) groups.push(group);
    });
    return groups;
  }
}
