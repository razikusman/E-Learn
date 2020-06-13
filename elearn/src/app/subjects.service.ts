import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubjectCreate } from './subject-create';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(
    private http :HttpClient,
  ) { }

  viewsubjects(){
    return this.http.get<SubjectCreate[]>('http://localhost/elearn/subjectview.php');
  }
}
