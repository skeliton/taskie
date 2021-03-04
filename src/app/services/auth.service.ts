import { Injectable } from '@angular/core';
import { IUser } from '../models/group';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser?: IUser;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  constructor(private messageService: MessageService) {}

  login(userName: string, password: string): void {
    if (!userName || !password) {
      this.messageService.addMessage('Please enter your userName and password');
      return;
    }
    if (userName === 'admin') {
      this.currentUser = {
        id: 1,
        userName: userName,
        isAdmin: true,
      };
      this.messageService.addMessage('Admin login');
      return;
    }
    this.currentUser = {
      id: 2,
      userName: userName,
      isAdmin: false,
    };
    this.messageService.addMessage(
      `User: ${this.currentUser.userName} logged in`
    );
  }

  logout(): void {
    this.currentUser = undefined;
  }
}
