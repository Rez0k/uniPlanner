import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../services/courses/courses.service';
import { CoursesRowComponent } from '../courses-row/courses-row.component';
import { CurriculumDetailsModel } from '../../../models/curriculumDetails';

import { Course } from 'src/app/modules/models/course';
import { CurriculumDetailsModel } from 'src/app/modules/models/curriculumDetails';
import { CoursesService } from 'src/app/modules/services/courses.service';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})

export class CoursesTableComponent implements OnInit {
  public coursesRows: CurriculumDetailsModel[] = [];
  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  private updateAllCourses(): void {
    this.coursesRows[0] = new CurriculumDetailsModel();
    console.log(this.coursesRows);
    console.log("DONE");
    return;

    this.coursesService.getAll()
      .subscribe((rows) => this.coursesRows = rows);
  }

  public courses: any[] = [];

  public curriculumDetails: any[] = [];

  constructor(readonly coursesService: CoursesService,) { }

  ngOnInit(): void 
  {
    this.coursesService.getAllCourses()
      .subscribe((rows) => {this.courses = rows;
      console.log('courses', this.courses);
      });

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
