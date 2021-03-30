import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IGroup, IGroupUser, IUser } from 'src/app/models/group';
import { GroupService } from 'src/app/services/group.service';
//import { AuthService } from 'src/app/services/auth.service';
import { LoggerService } from 'src/app/services/logger.service';
import { UserService } from 'src/app/services/user.service';
import { State } from 'src/app/state/app.state';
import { getCurrentUser } from 'src/app/user/state/user.reducer';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  title = 'Taskie';

  user$: Observable<IUser> | undefined;

  constructor(
    private userService: UserService,
    private groupService: GroupService,
    private loggerService: LoggerService,
    private router: Router,
    private scheduleDialog: MatDialog,
    public auth: AuthService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.loggerService.log('onInit');
    //this.user$ = this.store.select(getCurrentUser);
    //this.groups = this.userService.getGroupsByUserId(this.userId);
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
