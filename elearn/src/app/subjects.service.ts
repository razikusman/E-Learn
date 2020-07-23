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
  }//view subjects

  deleteubjects(Sub_ID: any){
    return this.http.delete<SubjectCreate[]>('http://localhost/elearn/subjectdelete.php?subid='+ Sub_ID);
  }//delete subject

  // Createbjects(){
  //   return this.http.get<SubjectCreate[]>('http://localhost/elearn/subjectview.php');
  // }

  updatesubjects(){
    return this.http.get<SubjectCreate[]>('http://localhost/elearn/subjectview.php');
  }//update subjet

  addsubjects(subject : SubjectCreate ){
    return this.http.post<any>('http://localhost/elearn/subjectadd.php',subject);
  }//add subject
}
