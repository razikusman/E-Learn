import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { Login } from '../login';

@Component({
  selector: 'app-parent-home',
  templateUrl: './parent-home.component.html',
  styleUrls: ['./parent-home.component.css']
})
export class ParentHomeComponent implements OnInit {

  users : Login[]; // store user data
  public id ="";// store id
  public childrens;// store childrens data

  constructor(
    private router: Router,
    private loginservice : LoginServiceService
  ) { }

  

  ngOnInit() {
    //console.log(this.id);
    this.id = localStorage.getItem("id");

    this.loginservice.user_parent()
    .subscribe((data : Login[] ) => {
      this.users = data; //user store the data from user table
    });

    this.loginservice.user_student()
    .subscribe((data : Login[] ) => {
      this.childrens = data; //user store the data from user table
      console.log(this.childrens)
    });
  }
  
  //sign out and reach login
  signout(login){
    this.router.navigate(['/login'], login)
  }

  //update profile
  update(profile){
    this.router.navigate([''], profile)
  }

  //chart info
  title = 'student evalution Details';
  type = 'LineChart';
  
  columnNames = ["Month", "Total"];
  options = {   
    hAxis: {
      title: 'Month'
    },
    vAxis:{
      title: 'Amount (Rs.)'
    },
  };
  width =1000;
  height = 1000;
}
