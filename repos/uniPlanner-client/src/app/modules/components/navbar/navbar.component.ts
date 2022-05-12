import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }

}
