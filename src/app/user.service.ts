import { Injectable } from '@angular/core';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean = false;
  constructor(
  ) {}

  getUser() : User {
    return USERS[0];
  }

  getUsers() : User[] {
    return USERS;
  }

  addUser(user: User) {
    //call add user api
  }

  
}
