import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
//import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-parent-home',
  templateUrl: './parent-home.component.html',
  styleUrls: ['./parent-home.component.css']
})
export class ParentHomeComponent implements OnInit {

  public value = {};
  constructor(
    private router: Router,
    private loginservice : LoginServiceService
  ) { }

  

  ngOnInit() {
    this.value = this.loginservice.getog();//get student id 
  }
  
  //sign out and reach login
  signout(login){
    this.router.navigate(['/login'], login)
  }

  //update profile
  update(profile){
    this.router.navigate([''], profile)
  }
}
