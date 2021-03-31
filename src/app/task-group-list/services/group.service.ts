import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IGroup, IGroupUser } from '../../models/group';
import { LoggerService } from '../../services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private url = 'api/groups';

  constructor(private loggerService: LoggerService, private http: HttpClient) {}

  getGroups(): Observable<IGroup[]> {
    return this.http.get<IGroup[]>(this.url).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.loggerService.handleError)
    );
  }

  getGroupsById(id: number): Observable<IGroup> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.url}/${id}`;
    return this.http
      .get<IGroup>(url, { headers })
      .pipe(
        tap((data) => console.log('getGroup: ' + id)),
        catchError(this.loggerService.handleError)
      );
  }

  // getGroupById(id: number): IGroup {
  //   let Group = this.getGroups().find((x) => {
  //     return x.id === id;
  //   });
  //   if (Group === undefined) {
  //     let err = new Error('Unknown Group Id');
  //     this.loggerService.handleError(err);
  //     throw err;
  //   }
  //   return Group;
  // }

  // getGroupById(id: number): IGroup | undefined {
  //   return this.testDataService.getGroups().find((x) => {
  //     return x.id === id;
  //   });
  // }

  // getGroupGroupsByGroupId(GroupId: number): IGroupGroup[] {
  //   return this.testDataService
  //     .getGroupGroups()
  //     .filter((x) => x.GroupId === GroupId);
  // }

  // getGroupsByGroupId(GroupId: number): IGroup[] {
  //   let groups: IGroup[] = new Array();
  //   this.getGroupGroupsByGroupId(GroupId).forEach((x) => {
  //     let group = this.getGroupById(x.groupId);
  //     if (group !== undefined) groups.push(group);
  //   });
  //   return groups;
  // }

  createGroup(Group: IGroup): Observable<IGroup> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // IGroup Id must be null for the Web API to assign an Id
    const newGroup = { ...Group, id: null };
    return this.http
      .post<IGroup>(this.url, newGroup, { headers })
      .pipe(
        tap((data) => console.log('createIGroup: ' + JSON.stringify(data))),
        catchError(this.loggerService.handleError)
      );
  }

  deleteGroup(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.url}/${id}`;
    return this.http
      .delete<IGroup>(url, { headers })
      .pipe(
        tap((data) => console.log('deleteIGroup: ' + id)),
        catchError(this.loggerService.handleError)
      );
  }

  updateGroup(Group: IGroup): Observable<IGroup> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.url}/${Group.id}`;
    return this.http
      .put<IGroup>(url, Group, { headers })
      .pipe(
        tap(() => console.log('updateIGroup: ' + Group.id)),
        // Return the IGroup on an update
        map(() => Group),
        catchError(this.loggerService.handleError)
      );
  }
}
