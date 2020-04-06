import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  //direct to the home page of user type 
  home(stdntcrete){
    this.router.navigate(['/stdnt-home'], stdntcrete);
  }

//direct to the signup user type 
  create(crete){
    this.router.navigate(['/crete'], crete);
  }
  

}
