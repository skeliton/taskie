import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITask } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // private _tasks: BehaviorSubject<ITask[]>;

  // private dataStore:{
  //   tasks: ITask[];
  // }

  constructor(private http: HttpClient) {
    //this.dataStore = {tasks: []};
    //this._tasks = new BehaviorSubject<ITask[]>([]);
    //this.load();
  }

  // load(){
  //   this.dataStore = {tasks:[
  //     {
  //       id: 1,
  //       groupId: number,
  //       group: IGroup,
  //       taskId: number,
  //       task: ITask,
  //       claimingUserId?:number,
  //       creatingUserid: number,
  //       creatingUserReviewClosed: boolean,
  //       archive: boolean,
  //     }
  //   ]};
  //   this._tasks.next(Object.assign({},this.dataStore).tasks)
  // }

  // get tasks(): Observable<ITask[]>{
  //   return this._tasks.asObservable();
  // }
}
