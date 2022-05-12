import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseModalComponent } from '../course-modal/course-modal.component';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(CourseModalComponent);
  }

}
