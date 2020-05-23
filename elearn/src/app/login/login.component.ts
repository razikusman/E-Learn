import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //ngForm = ;
  constructor(private router : Router,) { }

  log = new Login(null,null);
  ngOnInit() {
  }


  //direct to the home page of user type 
  login(home){
    if(this.log.name=='admin' && this.log.password== 'admin'){
      this.router.navigate(['/admin/home'], home);
    }
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
