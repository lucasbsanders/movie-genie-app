import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user: User;

  constructor(
    private userService : UserService,
    private location: Location
  ) {}

  signup(){
    this.userService.addUser(this.user);
  }

  goBack(): void {
    this.location.back();
  }

}
