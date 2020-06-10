import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-parent-home',
  templateUrl: './parent-home.component.html',
  styleUrls: ['./parent-home.component.css']
})
export class ParentHomeComponent implements OnInit {

  constructor(
    private router: Router,
    //private lgin : LoginComponent
  ) { }

  

  ngOnInit() {
    // const name = this.lgin.value;
    // console.log(name);
  }

  

  
  //sign out and reach login
  signout(login){
    this.router.navigate(['/login'], login)
  }

}
