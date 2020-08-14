import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { Login } from '../login';
import { SubjectsService } from '../subjects.service';
import { SubjectCreate } from '../create-subject';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {

  users : Login[]; // store user data
  public subjects ; //variable to store suject details
  subjectsteaching : SubjectCreate[]; //variable to store suject teaching details
  public id = ""; //variable to store id
  
  constructor(
    private subjectservice: SubjectsService,
    private router: Router,
    private loginservice : LoginServiceService
  ) { }

  ngOnInit() {
      this.id = localStorage.getItem("id");

      this.loginservice.user_teacher()
      .subscribe((data : Login[] ) => {
        this.users = data; //user store the data from user table
      });

      this.id = localStorage.getItem("id"); // user id

      this.subjectservice.viewsubjects()
      .subscribe((data: SubjectCreate[])=>{
        this.subjects = data
        //console.log(this.subjects);
      }); //subject details

      this.subjectservice.viewsubjectsteaching()
      .subscribe((data: SubjectCreate[])=>{
        this.subjectsteaching = data
       //console.log(this.subjectsteaching);
      }); //subjectteaching details

      
  }

  add(subjectsteaching : SubjectCreate): void{
    localStorage.setItem("subid", subjectsteaching.Sub_ID);
    this.router.navigate(['/quize'])
  }
}
