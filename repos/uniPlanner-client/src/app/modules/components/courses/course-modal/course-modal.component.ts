import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss']
})
export class CourseModalComponent implements OnInit {
  
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

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
    console.log(this.form.controls['courseName'].value)
  }
}
