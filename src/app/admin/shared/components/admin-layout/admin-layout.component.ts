import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  logout(event: Event) {
    event.preventDefault();
    this.authService.logout();
  }

}
