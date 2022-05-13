import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Course } from 'src/app/modules/models/course';
import { CurriculumDetailsModel } from 'src/app/modules/models/curriculumDetails';

@Component({
  selector: '[app-courses-row]',
  templateUrl: './courses-row.component.html',
  styleUrls: ['./courses-row.component.scss']
})
export class CoursesRowComponent implements OnInit {

  @Input() public curriculumDetails: CurriculumDetailsModel | undefined;

  @Input() public courses: Course[] = [];

  public coursesControl = new FormControl();

  public filteredOptions: Observable<Course[]> | undefined;

  constructor() { }

  ngOnInit(): void
  {
    this.filteredOptions = this.coursesControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.Name)),
      map(name => (name ? this._filter(name) : this.courses.slice()))
    );
  }

  ngAfterContentInit() {
    this.coursesControl.setValue({ Name: this.curriculumDetails?.Name });
  }

  public displayFn(course: Course): string
  {
    return course && course.Name ? course.Name : '';
  }

  private _filter(name: string): Course[]
  {
    const filterValue = name.toLowerCase();

    return this.courses.filter(course => course.Name?.toLowerCase().includes(filterValue));
  }

  public choosedCourse(course: any)
  {
    if (!course || !this.curriculumDetails) {
      return;
    }

    this.curriculumDetails.Name = course.Name;
    this.curriculumDetails.Points = course.Points;
    this.curriculumDetails.Course_number = course.Course_number;
    this.curriculumDetails.Type = course.Type;
    this.curriculumDetails.Grade = course.Grade;
    this.curriculumDetails.Status = course.Status;
  }

  gradeChanged() {
    if (this.curriculumDetails!.Grade >= 60) {
      this.curriculumDetails!.Status = 'עובר'
    } else {
      this.curriculumDetails!.Status = 'נכשל'
    }
  }
}
