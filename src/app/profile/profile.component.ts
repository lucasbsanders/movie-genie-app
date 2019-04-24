import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {
  user: User;

  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.user = this.userService.getUser()
  }


}
