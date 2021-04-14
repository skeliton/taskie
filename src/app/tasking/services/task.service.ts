import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map, mergeMap } from 'rxjs/operators';
import { IGroupTask, ITask } from '../../models/task';
import { LoggerService } from '../../services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private urlTasks = 'api/tasks';
  private urlGroupTasks = 'api/groupTasks';

  constructor(private loggerService: LoggerService, private http: HttpClient) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.urlTasks).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getTasksByUserId(id: number): Observable<ITask[]> {
    return this.http.get<IGroupTask[]>(this.urlGroupTasks).pipe(
      mergeMap((dataMap) => {
        let gt = dataMap.filter((gt) => gt.creatingUserId === id);
        return this.http.get<ITask[]>(this.urlTasks).pipe(
          map((data) =>
            data.filter((task) => gt.find((x) => x.creatingUserId == task.id))
          ),
          tap((data) => console.log(JSON.stringify(data))),
          catchError(this.loggerService.handleError)
        );
      }),
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.loggerService.handleError)
    );
  }

  getTasksById(id: number): Observable<ITask> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.urlTasks}/${id}`;
    return this.http
      .get<ITask>(url, { headers })
      .pipe(
        tap((data) => console.log('getGroup: ' + id)),
        catchError(this.loggerService.handleError)
      );
  }

  createTask(task: ITask): Observable<ITask> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // ITask Id must be null for the Web API to assign an Id
    const newTask = { ...task, id: null };
    return this.http
      .post<ITask>(this.urlTasks, newTask, { headers })
      .pipe(
        tap((data) => console.log('createITask: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteTask(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.urlTasks}/${id}`;
    return this.http
      .delete<ITask>(url, { headers })
      .pipe(
        tap((data) => console.log('deleteITask: ' + id)),
        catchError(this.handleError)
      );
  }

  updateTask(task: ITask): Observable<ITask> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.urlTasks}/${task.id}`;
    return this.http
      .put<ITask>(url, task, { headers })
      .pipe(
        tap(() => console.log('updateITask: ' + task.id)),
        // Return the ITask on an update
        map(() => task),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
