import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-stdnt-home',
  templateUrl: './stdnt-home.component.html',
  styleUrls: ['./stdnt-home.component.css']
})
export class StdntHomeComponent implements OnInit {

  
  constructor(
    private router: Router,
    private loginservice : LoginServiceService) { }

     
  ngOnInit() {
    
    console.log(this.loginservice.getog()); //get student id 
    
  }

  ids = this.loginservice.getog();
  
  //sign out and reach login
  signout(login){
    this.router.navigate(['/login'], login)
  };

  //update profile
  update(profile){
    this.router.navigate(['/login'], profile)
  }
}
