import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/modules/models/course';
import { CoursesService } from 'src/app/modules/services/courses.service';

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss']
})
export class CourseModalComponent implements OnInit, OnDestroy {
  
  coursesSubscription!: Subscription;
  form!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      courseName: ['', [Validators.required]],
      courseType: ['', [Validators.required]],
      coursePoints: ['', [Validators.required]],
      courseRequirements: ['', [Validators.required]],
      courseLevel: ['', [Validators.required]],
      courseNumber: ['', [Validators.required]]
    });
  }

  addCourse() {
    const course: Course = {
      Name: this.form.controls['courseName'].value,
      CourseNumber: this.form.controls['courseNumber'].value,
      Points: this.form.controls['coursePoints'].value,
      Type: this.form.controls['courseType'].value
    }
    
    this.coursesSubscription = this.coursesService.postCourse(course).subscribe(res => {});
  }

  ngOnDestroy() {
    this.coursesSubscription?.unsubscribe();
  }
}
