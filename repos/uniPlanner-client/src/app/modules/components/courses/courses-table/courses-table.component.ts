import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../services/courses/courses.service';
import { CoursesRowComponent } from '../courses-row/courses-row.component';
import { CurriculumDetailsModel } from '../../../models/curriculumDetails';

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

  constructor(private coursesService: CoursesService,) { }

  ngOnInit(): void {
    console.log("init");
    
    this.updateAllCourses();
  }

}
