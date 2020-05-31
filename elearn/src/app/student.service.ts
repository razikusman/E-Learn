import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateStudent } from './create-student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  viewstudent(){
    return this.http.get<[]>('http://localhost/elearn/stuview.php'); 
  }

  createstudent(student : CreateStudent ){
    return this.http.post<any>('http://localhost/elearn/addstudent.php', student); 
  }
}
