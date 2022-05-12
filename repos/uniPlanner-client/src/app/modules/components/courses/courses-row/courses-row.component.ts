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
  @Input() curriculumDetailsModel: CurriculumDetailsModel | undefined;

  public coursesControl = new FormControl();
  private options: Course[] = [];
  public filteredOptions: Observable<Course[]> | undefined;

  constructor() { }

  ngOnInit(): void
  {
    this.curriculumDetailsModel =
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
        Id: '',
        CourseNumber: 0,
        Name: 'uriel',
        Points:  0,
        Type:  '',
      }
    ];
    console.log(this.options);

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
    console.log(name);

    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.Name.toLowerCase().includes(filterValue));
  }

}
