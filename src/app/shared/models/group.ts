export interface IGroup {
  id: number;
  groupName: string;
  users: IUser[];
  groupType: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  groups: IGroup[];
}
export interface IGroupUser {
  id: number;
  groupId: number;
  userId: number;
  group: IGroup;
  user: IUser;
 }
