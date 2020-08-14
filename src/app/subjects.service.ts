import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SubjectCreate } from './create-subject';
//import { ResponseContenType } from '@angular/http';

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

  updatesubjects(){
    return this.http.get<SubjectCreate[]>('http://localhost/elearn/subjectview.php');
  }//update subjet

  addsubjects(subject : SubjectCreate ){
    return this.http.post<any>('http://localhost/elearn/subjectadd.php',subject);
  }//add subject

  viewsubjectsteaching(){
    return this.http.get<SubjectCreate[]>('http://localhost/elearn/subjectteachingview.php');
  }//view subjectsteaching

  
  enrollsubjects(Sub_ID: any,stu_id:any ){
    return this.http.get<any>('http://localhost/elearn/enrollsubjects.php?data='+stu_id+Sub_ID);
  }//enroll subject

  viewsubjectspermision(){
    return this.http.get<SubjectCreate[]>('http://localhost/elearn/enrolsubjectview.php');
  }//view subjects

  viewmaterials() : any {
    return this.http.get('http://localhost/elearn/materialview.php', { responseType: 'blob'});
  }//view subjects materials
}
