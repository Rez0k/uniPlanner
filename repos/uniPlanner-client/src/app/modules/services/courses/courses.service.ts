import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurriculumDetailsModel } from 'src/app/modules/models/curriculumDetails';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<CurriculumDetailsModel[]> {
    return this.http.get<CurriculumDetailsModel[]>(baseUrl);
  }
}
