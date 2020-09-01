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

  //view students
  myviewstudent(){
    return this.http.get<CreateStudent[]>('http://localhost/elearn/mystudentview.php'); 
  }
  //view students card
  viewstudentcard(){
    return this.http.get<CreateStudent[]>('http://localhost/elearn/studentviewcard.php'); 
  }

  //on marking
  markstudentcard(student : CreateStudent) {
    return this.http.post<any>('http://localhost/elearn/studentmark.php', student);
  }

  //create a student
  createstudent(student : CreateStudent ){
    return this.http.post<any>('http://localhost/elearn/addstudent.php', student);
  }

  //add student to subject
  addstudent(){
    return this.http.get<CreateStudent[]>('http://localhost/elearn/add_student_to_subjet.php');
  }

  enrollstudent(stu_id:any,Sub_ID: any ){
    return this.http.get<any>('http://localhost/elearn/enrolstudent.php?data='+stu_id+Sub_ID);
    
    
  }//enroll student to subject
}
