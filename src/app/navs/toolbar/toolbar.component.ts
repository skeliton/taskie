import { Component, OnInit } from '@angular/core';
import { IGroup, IGroupUser, IUser } from 'src/app/models/group';
import { LoggerService } from 'src/app/services/logger.service';
import { UserGroupService } from 'src/app/services/user-group.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
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
