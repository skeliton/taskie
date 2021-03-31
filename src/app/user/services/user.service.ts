import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IGroup, IGroupUser, IUser } from '../../models/group';
import { LoggerService } from '../../services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'api/users';

  constructor(private loggerService: LoggerService, private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.loggerService.handleError)
    );
  }

  getUsersById(id: number): Observable<IUser> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.url}/${id}`;
    return this.http
      .get<IUser>(url, { headers })
      .pipe(
        tap((data) => console.log('getUser: ' + id)),
        catchError(this.loggerService.handleError)
      );
  }

  // getUserById(id: number): IUser {
  //   let user = this.getUsers().find((x) => {
  //     return x.id === id;
  //   });
  //   if (user === undefined) {
  //     let err = new Error('Unknown User Id');
  //     this.loggerService.handleError(err);
  //     throw err;
  //   }
  //   return user;
  // }

  // getGroupById(id: number): IGroup | undefined {
  //   return this.testDataService.getGroups().find((x) => {
  //     return x.id === id;
  //   });
  // }

  // getUserGroupsByUserId(userId: number): IGroupUser[] {
  //   return this.testDataService
  //     .getGroupUsers()
  //     .filter((x) => x.userId === userId);
  // }

  // getGroupsByUserId(userId: number): IGroup[] {
  //   let groups: IGroup[] = new Array();
  //   this.getUserGroupsByUserId(userId).forEach((x) => {
  //     let group = this.getGroupById(x.groupId);
  //     if (group !== undefined) groups.push(group);
  //   });
  //   return groups;
  // }

  createUser(User: IUser): Observable<IUser> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // IUser Id must be null for the Web API to assign an Id
    const newUser = { ...User, id: null };
    return this.http
      .post<IUser>(this.url, newUser, { headers })
      .pipe(
        tap((data) => console.log('createIUser: ' + JSON.stringify(data))),
        catchError(this.loggerService.handleError)
      );
  }

  deleteUser(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.url}/${id}`;
    return this.http
      .delete<IUser>(url, { headers })
      .pipe(
        tap((data) => console.log('deleteIUser: ' + id)),
        catchError(this.loggerService.handleError)
      );
  }

  updateUser(User: IUser): Observable<IUser> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.url}/${User.id}`;
    return this.http
      .put<IUser>(url, User, { headers })
      .pipe(
        tap(() => console.log('updateIUser: ' + User.id)),
        // Return the IUser on an update
        map(() => User),
        catchError(this.loggerService.handleError)
      );
  }
}
