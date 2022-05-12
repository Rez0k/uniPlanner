import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/modules/services/courses.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CourseModalComponent } from '../course-modal/course-modal.component';


@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})

export class CoursesTableComponent implements OnInit {

  public courses: any[] = [];

  public curriculumDetails: any[] = [];

  public coursesSubscription!: Subscription;

  public tableColumns: string[] = [
    'סמסטר',
    'שנה',
    'מספר קורס',
    'שם קורס',
    'נקז',
    'רמה',
    'ציון',
    'סטטוס',
    'סוג'
  ];

  constructor(readonly coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesSubscription = this.coursesService.getAllCourses()
      .subscribe((rows: any) => this.courses = rows);

    this.curriculumDetails = [
      {
        Semester: 1,
        Year: 2022,
        Name: 'infi',
        Course_number: 0,
        Points: 0,
        Level: 0,
        Type: '',
        Grade: 0,
        Status: '',
        UserName: '0',
      },
      {
        Semester: 0,
        Year: 0,
        Name: '',
        Course_number: 0,
        Points: 0,
        Level: 0,
        Type: '',
        Grade: 0,
        Status: '',
        UserName: 'dsd',
      },
    ]

  }

  public add() {
    this.curriculumDetails.push({
      Semester: 0,
      Year: 0,
      Name: '',
      Course_number: 0,
      Points: 0,
      Level: 0,
      Type: '',
      Grade: 0,
      Status: '',
      UserName: '',
    });
  }

  ngOnDestroy() {
    this.coursesSubscription?.unsubscribe();
  }
}
