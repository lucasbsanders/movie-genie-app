import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { UserService } from '../user.service';

@Component({
  selector: 'app-genierec',
  templateUrl: './genierec.component.html',
  styleUrls: ['./genierec.component.css']
})
export class GenieRecComponent implements OnInit {
  user: User;

  constructor(private userService: UserService
  ) { }

  ngOnInit() {
  }

  getUser() {
    this.user = this.userService.getUser();
  }

}
