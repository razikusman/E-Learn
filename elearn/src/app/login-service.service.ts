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
}
