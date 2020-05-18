import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //ngForm = ;
  constructor(private router : Router) { }

  //get f() { return this.ngForm.controls; }

  ngOnInit() {
  }
  //private uname=('uname');
  //private password="";

  //direct to the home page of user type 
  login(home){
    
    console.log("this.uname");
  }

//direct to the signup user type 
  create(crete){
    this.router.navigate(['/create'], crete);
  }
  
  //direct to the about interface
  about(about){
    this.router.navigate(['/about'], about)
  }

}
