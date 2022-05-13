import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { CourseModalComponent } from '../courses/course-modal/course-modal.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router, public dialog: MatDialog) {
   }

  ngOnInit(): void {
  }

  toCourses() {
    this.route.navigate(['courses-page']);
  }

  logout(){
    this.route.navigate(['login']);
  }

  addCourse() {
    this.dialog.open(CourseModalComponent);
  }

  toSettings(){
    this.route.navigate(['settings']);
  }
}
