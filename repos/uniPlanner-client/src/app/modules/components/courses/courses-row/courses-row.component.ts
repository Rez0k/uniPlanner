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

  @Input() public courses: Course[] = [];

  public coursesControl = new FormControl();

  public filteredOptions: Observable<Course[]> | undefined;

  constructor() { }

  ngOnInit(): void
  {
    console.log(this.courses);
    this.filteredOptions = this.coursesControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.Name)),
      map(name => (name ? this._filter(name) : this.courses.slice())),
    );
  }

  public displayFn(course: Course): string
  {
    return course && course.Name ? course.Name : '';
  }

  private _filter(name: string): Course[]
  {    
    const filterValue = name.toLowerCase();

    return this.courses.filter(course => course.Name.toLowerCase().includes(filterValue));
  }

  public choosedCourse(course: any)
  {
    if (!course || !this.curriculumDetails)
    {
      return;
    }

    this.curriculumDetails.Points = course.Points;
    this.curriculumDetails.Course_number = course.Course_number;
    this.curriculumDetails.Type = course.Type;
  }
}
