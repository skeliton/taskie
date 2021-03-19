import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { IGroup, IGroupUser, IUser } from 'src/app/models/group';
//import { AuthService } from 'src/app/services/auth.service';
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
    private router: Router,
    private scheduleDialog: MatDialog,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.loggerService.log('onInit');
    this.user = this.userGroupService.getUserById(this.userId);
    this.groups = this.userGroupService.getGroupsByUserId(this.userId);
  }

  // get isLoggedIn(): boolean {
  //   return this.auth.isAuthenticated$ | async;
  // }

  // get userName(): string {
  //   if (this.authService.currentUser) {
  //     return this.authService.currentUser.userName;
  //   }
  //   return '';
  // }

  logOut(): void {
    this.auth.logout();
    //this.authService.logout();
    this.router.navigate(['/']);
  }

  openScheduleDialog(): void {}
}
