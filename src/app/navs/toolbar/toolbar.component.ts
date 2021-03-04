import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGroup, IGroupUser, IUser } from 'src/app/models/group';
import { AuthService } from 'src/app/services/auth.service';
import { LoggerService } from 'src/app/services/logger.service';
import { UserGroupService } from 'src/app/services/user-group.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
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
    private loggerService: LoggerService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loggerService.log('onInit');
    this.user = this.userGroupService.getUserById(this.userId);
    this.groups = this.userGroupService.getGroupsByUserId(this.userId);
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
