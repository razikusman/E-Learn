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
}
