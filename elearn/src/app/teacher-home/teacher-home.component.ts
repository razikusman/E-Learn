import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {

  public value = {};
  constructor(
    private router: Router,
    private loginservice : LoginServiceService
  ) { }

  ngOnInit() {
    this.value = this.loginservice.getog();//get student id 
    
  }

  add(quize){
    this.router.navigate(['/quize'], quize)
  }
}
