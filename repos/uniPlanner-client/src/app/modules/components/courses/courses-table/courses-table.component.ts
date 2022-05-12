import { Component, OnInit } from '@angular/core';
import { CoursesRowComponent } from '../courses-row/courses-row.component';

import { CoursesService } from 'src/app/modules/services/courses.service';
import { CurriculumService } from 'src/app/modules/services/curriculum.service';

import { Subscription } from 'rxjs';
import { Consts } from 'src/app/modules/consts/consts';


@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})

export class CoursesTableComponent implements OnInit {

  public courses: any[] = [];

  public curriculumDetails: any[] = [];

  public coursesSubscription!: Subscription;

  public curriculumSubscription!: Subscription;
  public curriculumGetSubscription!: Subscription;



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

  constructor(readonly coursesService: CoursesService,
              readonly curriculumService: CurriculumService) { }

  ngOnInit(): void 
  {
    this.coursesSubscription = this.coursesService.getAllCourses()
      .subscribe((rows: any) => this.courses = rows);
    this.curriculumGetSubscription = this.curriculumService.getCurriculumByUser(Consts.userName)
      .subscribe((rows: any) => this.curriculumDetails = rows.courses);
  }

  public add()
  {    
    this.curriculumDetails.push({  Semester:  0,
      Year: 0,
      Name: '',
      Course_number: 0,
      Points:  0,
      Level:  0,
      Type: '',
      Grade:  0,
      Status: '',
      UserName:  '',});
  }

  public save()
  {
    this.curriculumSubscription = this.curriculumService.postCurriculum(Consts.userName, this.curriculumDetails).subscribe();
  }

  ngOnDestroy() {
    this.coursesSubscription?.unsubscribe();
    this.curriculumSubscription?.unsubscribe();
    this.curriculumGetSubscription?.unsubscribe();
  }
}
