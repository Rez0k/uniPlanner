import { Component, OnInit } from '@angular/core';
import { CoursesRowComponent } from '../courses-row/courses-row.component';

import { Course } from 'src/app/modules/models/course';
import { CoursesService } from 'src/app/modules/services/courses.service';


@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})

export class CoursesTableComponent implements OnInit {

  public courses: any[] = [];

  public curriculumDetails: any[] = [];

  constructor(readonly coursesService: CoursesService,) { }

  ngOnInit(): void 
  {
    this.coursesService.getAllCourses()
      .subscribe((rows: any) => this.courses = rows      );

    this.curriculumDetails=[
      {
        Semester:  1,
        Year: 2022,
        Name: 'infi',
        CourseNumber: 0,
        Points:  0,
        Level:  0,
        Type: '',
        Grade:  0,
        Status: '',
        UserName:  '0',
      },
      {
        Semester:  0,
        Year: 0,
        Name: '',
        CourseNumber: 0,
        Points:  0,
        Level:  0,
        Type: '',
        Grade:  0,
        Status: '',
        UserName:  'dsd',
      },
    ]  

  }

}
