import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUser?: string;

  loginUserByName(name: string) {
    this.loggedInUser = name;
  }

  logoutCurrentUser() {
    this.loggedInUser = undefined;
  }

  getUser() {
    return this.loggedInUser;
  }
}
