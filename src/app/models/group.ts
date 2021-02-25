export interface IGroup {
  id: number;
  groupName: string;
  ownerUserId: number;
  groupType: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
}

export interface IGroupUser {
  id: number;
  groupId: number;
  userId: number;
}
