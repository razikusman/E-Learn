import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Login } from '../login';
import { MatDialog } from '@angular/material';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //ngForm = ;
  constructor(
    private router : Router,
    private dialog : MatDialog) { }

  lgin = new Login(null,null);
  ngOnInit() {
  }


  //direct to the home page of user type 
  login(home){
    if(this.lgin.name =='admin' && this.lgin.password == 'admin'){
      this.router.navigate(['/admin/home'], home);
    }
    else{
      this.dialog.open(DialogExampleComponent);
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
