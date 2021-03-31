import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IGroup, IGroupUser, IUser } from 'src/app/models/group';
import { GroupService } from 'src/app/task-group-list/services/group.service';
//import { AuthService } from 'src/app/services/auth.service';
import { LoggerService } from 'src/app/services/logger.service';
import { State } from 'src/app/state/app.state';
import { getCurrentUser } from 'src/app/user/state/user.reducer';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  title = 'Taskie';
  isLoggedIn = false;
  user$: Observable<IUser> | undefined;

  constructor(
    private loggerService: LoggerService,
    private router: Router,
    private scheduleDialog: MatDialog,
    public auth: AuthService,
    private store: Store<State>
  ) {
    this.auth.loginChanged.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    })
  }

  ngOnInit(): void {
    this.loggerService.log('onInit');
    this.auth.isLoggedIn().then(loggedIn => {
      this.isLoggedIn = loggedIn;
    })
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

  logIn(): void{
    this.auth.login();
  }

  logOut(): void {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  openScheduleDialog(): void {}
}
