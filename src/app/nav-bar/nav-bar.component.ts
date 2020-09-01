import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectCreate } from '../create-subject';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public subjects ; //variable to store suject details
  public subjectsteaching; //variable to store suject teaching details
  public id = ""; //variable to store id

  constructor(
    private subjectservice: SubjectsService,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.id = localStorage.getItem("id"); // user id

    this.subjectservice.viewallsubjects()
    .subscribe((data: SubjectCreate[])=>{
      this.subjects = data
    }); //subject details

    this.subjectservice.viewsubjectsteaching()
    .subscribe((data: SubjectCreate[])=>{
      this.subjectsteaching = data
    }); //subjectteaching details
  }

  teacherhome(){
    return this.router.url=='/teacher/home';
  }

  subject(){
    return this.router.url=='/subject/details';
  }

  studenthome(){
    return this.router.url=='/student/home';
  }

  adminhome(){
    return this.router.url=='/admin/home';
  }

  parenthome(){
    return this.router.url=='/parent/home';
  }
  

  public details = [
    {
        type: 'student',
        url: 'studenthome()',
    },

    {
        type: 'teacher',
        url:'teacherhome()',
    },

    {
        type: 'subjects',
        name: 'noornisa',
        url: 'subject()'
    },
  ];

}
