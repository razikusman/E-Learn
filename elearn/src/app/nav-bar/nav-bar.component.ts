import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentProgressComponent } from '../student-progress/student-progress.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  teacherhome(){
    return this.router.url=='/teacher/home'
  }

  subject(){
    return this.router.url=='/subject/details'
  }

  studenthome(){
    return this.router.url=='/student/home'
  }

  adminhome(){
    return this.router.url=='/admin/home'
  }

  parenthome(){
    return this.router.url=='/parent/home'
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
        type: 'subject',
        name: 'noornisa',
        url: 'subject()'
    },
  ];

}
