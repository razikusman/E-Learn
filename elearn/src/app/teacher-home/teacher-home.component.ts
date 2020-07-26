import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { Login } from '../login';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {

  users : Login[]; // store user data
  public id ="";// store id
  constructor(
    private router: Router,
    private loginservice : LoginServiceService
  ) { }

  ngOnInit() {
      this.id = localStorage.getItem("id");
      this.loginservice.user_teacher()
      .subscribe((data : Login[] ) => {
        this.users = data; //user store the data from user table
      });
      
  }

  add(quize){
    this.router.navigate(['/quize'], quize)
  }
}
