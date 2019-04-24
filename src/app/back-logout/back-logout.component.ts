import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-logout',
  templateUrl: './back-logout.component.html',
  styleUrls: ['./back-logout.component.css']
})
export class BackLogoutComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
