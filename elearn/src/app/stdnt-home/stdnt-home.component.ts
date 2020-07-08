import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginServiceService } from '../login-service.service';
import { parse } from 'querystring';
import { Login } from '../login';

@Component({
  selector: 'app-stdnt-home',
  templateUrl: './stdnt-home.component.html',
  styleUrls: ['./stdnt-home.component.css']
})
export class StdntHomeComponent implements OnInit {

  public value = {};
  constructor(
    private router: Router,
    private loginservice : LoginServiceService) { }

  
  ngOnInit() {
    //console.log(this.loginservice.getog());
    this.value = this.loginservice.getog();
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
