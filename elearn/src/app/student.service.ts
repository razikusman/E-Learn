import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateStudent } from './create-student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  //delete student
  deletestudent(userid : number) {
    return this.http.get<CreateStudent[]>('http://localhost/elearn/studentdelete.php?userid=' + userid);
  }


  //view students
  viewstudent(){
    return this.http.get<[]>('http://localhost/elearn/studentview.php'); 
  }

  //create a student
  createstudent(student : CreateStudent ){
    return this.http.post<any>('http://localhost/elearn/addstudent.php', student); 
  }

  addsubjects(student : CreateStudent ){
    return this.http.post<any>('http://localhost/elearn/addsubjects.php', student); 
  }
}
