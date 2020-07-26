import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { Login } from '../login';

@Component({
  selector: 'app-stdnt-home',
  templateUrl: './stdnt-home.component.html',
  styleUrls: ['./stdnt-home.component.css']
})
export class StdntHomeComponent implements OnInit {

  users : Login[]; // store user data
  public id ="";// store id
  constructor(
    private router: Router,
    private loginservice : LoginServiceService) { }

  
  ngOnInit() {
    //console.log(this.loginservice.getog());
    this.id = localStorage.getItem("id");
    this.loginservice.user_student()
    .subscribe((data : Login[] ) => {
      this.users = data; //user store the data from user table
    });
  }
  
  //sign out and reach login
  signout(login){
    
    this.router.navigate(['/login'], login)
  };

  //update profile
  update(profile){
    this.router.navigate(['/login'], profile)
  }
}
