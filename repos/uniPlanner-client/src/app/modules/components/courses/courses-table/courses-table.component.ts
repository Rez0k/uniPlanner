import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/modules/services/courses.service';
import { CurriculumService } from 'src/app/modules/services/curriculum.service';

import { Subscription } from 'rxjs';
import { Consts } from 'src/app/modules/consts/consts';
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

  public curriculumSubscription!: Subscription;
  public curriculumGetSubscription!: Subscription;
  public average: number = 0;



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
              readonly curriculumService: CurriculumService,
               public dialog: MatDialog) { }

  ngOnInit(): void {
    this.coursesSubscription = this.coursesService.getAllCourses()
      .subscribe((rows: any) => {
        this.courses = rows;
        this.curriculumGetSubscription = this.curriculumService.getCurriculumByUser(Consts.userName)
          .subscribe((rows: any) =>{
            this.curriculumDetails = rows?.courses || [];
            
            this.curriculumDetails .sort(function (a, b) {
              return  b.Year === a.Year ?  b.Semester - a.Semester : b.Year - a.Year;
            });
            this.average = this.calculateAverage(rows);
      });
       });
  }

  public add() {
    this.curriculumDetails?.push({
      Semester: 1,
      Year: + new Date().getFullYear(),
      Name: '',
      Course_number: 1000,
      Points: 0,
      Level: 0,
      Type: 'חובה',
      Grade: 0,
      Status: 'עתידי',
      UserName: '',
    });
  }

  openDialog() {
    this.dialog.open(CourseModalComponent);
  }

  public save()
  {
    this.curriculumSubscription = this.curriculumService.postCurriculum(Consts.userName, this.curriculumDetails).subscribe();
  }

  public calculateAverage(curri: any) {
    if (!curri?.courses) {
      return 0;
    }

    var pcounter = 0;
    var total = 0;
    for (const course of curri.courses) {
      total += (+course.Points * +course.Grade);
      pcounter += +course.Points;

    }
    return(total/pcounter);
  }

  ngOnDestroy() {
    // this.coursesSubscription?.unsubscribe();
    // this.curriculumSubscription?.unsubscribe();
    // this.curriculumGetSubscription?.unsubscribe();
  }
}
