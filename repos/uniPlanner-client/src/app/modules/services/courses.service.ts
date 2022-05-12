import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Course } from 'src/app/modules/models/course';

import { Consts } from 'src/app/modules/consts/consts';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

	constructor(private http: HttpClient) { }

	getAllCourses(): Observable<any>
	{    
		return this.http.get(`${Consts.baseUrl}api/courses/allCourses`);
	}

	postCourse(course: Course): Observable<any>
	{    
		return this.http.post(`${Consts.baseUrl}api/courses/saveCourse`, course);
	}
}
