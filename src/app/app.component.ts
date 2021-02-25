import { Component, OnInit } from '@angular/core';
import { IGroup, IGroupUser, IUser } from './models/group';
import { LoggerService } from './services/logger.service';
import { UserGroupService } from './services/user-group.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Taskie';
  taskieFilterSelected = 'merged';
  userId = 1;
  user!: IUser;
  groupUser!: IGroupUser[];
  groups!: IGroup[];

  constructor(
    private userGroupService: UserGroupService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.loggerService.log('onInit');
    this.user = this.userGroupService.getUserById(this.userId);
    this.groups = this.userGroupService.getGroupsByUserId(this.userId);
  }
}
