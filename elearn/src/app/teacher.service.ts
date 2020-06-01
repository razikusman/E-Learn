import { Injectable } from '@angular/core';
import { CreateTeacher } from './create-teacher';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http : HttpClient) { }

  viewteacher(){
    return this.http.get<[]>('http://localhost/elearn/teacherview.php'); 
  }

  CreateTeacher(teacher : CreateTeacher ){
    return this.http.post<any>('http://localhost/elearn/addteacher.php', teacher); 
  }
}
