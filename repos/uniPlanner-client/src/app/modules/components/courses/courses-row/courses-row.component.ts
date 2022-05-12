import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { Consts } from 'src/app/modules/consts/consts';
import { Course } from 'src/app/modules/models/course';

import { CurriculumDetailsModel } from 'src/app/modules/models/curriculumDetails';

@Component({
  selector: 'app-courses-row',
  templateUrl: './courses-row.component.html',
  styleUrls: ['./courses-row.component.scss']
})
export class CoursesRowComponent implements OnInit {
  @Input() public curriculumDetails: CurriculumDetailsModel | undefined;

  @Input() private options: Course[] = [];

  public coursesControl = new FormControl();

  public filteredOptions: Observable<Course[]> | undefined;

  constructor() { }

  ngOnInit(): void
  {
    this.curriculumDetails =
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
      UserId:  0,
    }

    this.options = [
      {
        Id: '123',
        CourseNumber: 64646,
        Name: 'uriel',
        Points:  5,
        Type:  'damn',
      }
    ];

    this.filteredOptions = this.coursesControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.Name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
  }

  public displayFn(course: Course): string
  {
    return course && course.Name ? course.Name : '';
  }

  private _filter(name: string): Course[]
  {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.Name.toLowerCase().includes(filterValue));
  }

  public choosedCourse(course: any)
  {
    if (!course || !this.curriculumDetails)
    {
      return;
    }

    this.curriculumDetails.Points = course.Points;
    this.curriculumDetails.CourseNumber = course.CourseNumber;
    this.curriculumDetails.Type = course.Type;
  }
}
