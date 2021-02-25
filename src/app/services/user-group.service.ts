import { Injectable } from '@angular/core';
import { IGroup, IGroupUser, IUser } from '../models/group';
import { groups, groupUsers, users } from '../models/tempdata';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class UserGroupService {
  constructor(private loggerService: LoggerService) {}

  getUserById(id: number): IUser {
    let user = users.find((x) => {
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
    return groups.find((x) => {
      return x.id === id;
    });
  }

  getUserGroupsByUserId(userId: number): IGroupUser[] {
    return groupUsers.filter((x) => x.userId === userId);
  }

  getGroupsByUserId(userId: number): IGroup[] {
    let groups: IGroup[] = new Array();
    groupUsers
      .filter((x) => x.userId === userId)
      .forEach((x) => {
        let group = this.getGroupById(x.groupId);
        if (group !== undefined) groups.push(group);
      });
    return groups;
  }
}
