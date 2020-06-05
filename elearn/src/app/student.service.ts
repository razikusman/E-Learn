import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateStudent } from './create-student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  //delete student
  deletestudent(Student_ID : number) {
    return this.http.delete<CreateStudent[]>('http://localhost/elearn/studentdelete.php?userid=' + Student_ID);
  }


  //view students
  viewstudent(){
    return this.http.get<CreateStudent[]>('http://localhost/elearn/studentview.php'); 
  }

  //create a student
  createstudent(student : CreateStudent ){
    return this.http.post<any>('http://localhost/elearn/addstudent.php', student); 
  }

  addsubjects(student : CreateStudent ){
    return this.http.post<any>('http://localhost/elearn/addsubjects.php', student); 
  }
}
