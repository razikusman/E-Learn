import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //sign out and reach login
  signout(login){
    this.router.navigate(['/login'], login)
  }

  add(quize){
    this.router.navigate(['/quize'], quize)
  }
}
