import { Injectable } from '@angular/core';
import { CreateTeacher } from './create-teacher';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http : HttpClient) { }

  viewquize(){
    return this.http.get<CreateTeacher[]>('http://localhost/elearn/viewquize.php');
  }//view quize

  viewquizelist(){
    return this.http.get<CreateTeacher[]>('http://localhost/elearn/viewquizelist.php');
  }//view quizelist

  addquize(teacher : CreateTeacher ){
    return this.http.post<any>('http://localhost/elearn/addquize.php', teacher); 
  }//add teacher
}
