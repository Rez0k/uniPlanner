import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Consts } from 'src/app/modules/consts/consts';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

	constructor(private http: HttpClient) { }

	getCurriculumByUser(userName: string): Observable<any>
	{
		return this.http.get(`${Consts.baseUrl}api/curriculum/search/${userName}`);
	}

	postCurriculum(userName: string, courses: any[]): Observable<any>
	{
		return this.http.post(`${Consts.baseUrl}api/curriculum/insert`, {username: userName, courses: courses});
	}
}
