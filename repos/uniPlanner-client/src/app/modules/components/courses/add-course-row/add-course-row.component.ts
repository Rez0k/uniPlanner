import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-course-row',
  templateUrl: './add-course-row.component.html',
  styleUrls: ['./add-course-row.component.scss']
})
export class AddCourseRowComponent implements OnInit {

  @Output() addEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void 
  {
  }

  public addCourse() 
  {
    this.addEvent.emit();
  }

}
