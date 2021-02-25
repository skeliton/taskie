import { Injectable } from '@angular/core';
import { IGroup, IGroupUser, IUser } from '../models/group';

@Injectable({
  providedIn: 'root',
})
export class TestDataService {
  constructor() {}

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
}
