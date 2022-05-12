import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) {
   }

  ngOnInit(): void {
  }

  toCourses() {
    this.route.navigate(['courses-page']);
  }

  logout(){
    this.route.navigate(['login']);
  }
}
