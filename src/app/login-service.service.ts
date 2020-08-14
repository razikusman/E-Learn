import { Injectable } from '@angular/core';
import { Login } from './login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http : HttpClient) { }

  logincheck(){
    return this.http.get<Login[]>('http://localhost/elearn/login.php');
  }

  private value = {};
  setlog(name){
    this.value["user_name"] = name;
  }

  getog(){
    return this.value;
  }

  //teacher name
  user_teacher(){
    return this.http.get<Login[]>('http://localhost/elearn/user-teacher.php');
  }

  //student name
  user_student(){
    return this.http.get<Login[]>('http://localhost/elearn/user-student.php');
  }

  //teacher name
  user_parent(){
    return this.http.get<Login[]>('http://localhost/elearn/user-parent.php');
  }
}

/*viewteacher(){
    return this.http.get<[]>('http://localhost/elearn/teacherview.php'); 
  }//view teachers

  CreateTeacher(teacher : CreateTeacher ){
    return this.http.post<any>('http://localhost/elearn/addteacher.php', teacher); 
  }//add teacher */
