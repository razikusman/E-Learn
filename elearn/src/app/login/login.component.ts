import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Login } from '../login';
import { MatDialog } from '@angular/material';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { LoginServiceService } from '../login-service.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users : Login[]; // aray to store the user information
  public id = "";
  public name = "";
  constructor(
    private router : Router,
    private dialog : MatDialog,
    private loginservice : LoginServiceService) { }

  lgin = new Login(null,null,null); //taking the inputs into a format
  dt : Login[]
  ngOnInit() {
    // take all the details from user tble for validation
    this.loginservice.logincheck()
      .subscribe((data : Login[])=>{
        this.users = data; //user store the data from user table
      });
  }

  //direct to the home page of user type 
  login(home){
    if(this.lgin.name !='admin' && this.lgin.password != 'admin'){
      for(let x = 0; x < this.users.length; x++){ //x is just an integer
      
        //validating
        if(this.lgin.name == this.users[x].name && this.lgin.password ==  this.users[x].password){
          //  console.log("id:" + this.users[x].name);
          //  console.log("password :" + this.users[x].password);
          //  console.log("type:"+ this.users[x].type);
  
          //student login
          if(this.users[x].type == "Student"){
            this.router.navigate(['/student/home'], home);
            this.id = this.users[x].password;
            this.name = this.users[x].name;
            this.loginservice.setlog(this.users[x].name,this.users[x].password);//pass id to hme page
          }
          
  
          //parent login
          else if(this.users[x].type == "Parent"){
            this.router.navigate(['/parent/home'], home);
            this.loginservice.setlog(this.users[x].type,this.users[x].password);//pass id to hme page
          }
  
          //teacher login
          else if(this.users[x].type == "Teacher"){
            this.router.navigate(['/teacher/home'], home);
            this.loginservice.setlog(this.users[x].type,this.users[x].password);//pass id to hme page
          }
          return x = x;
        }

        //lgin error
        else if(x == this.users.length - 1){
          this.dialog.open(DialogExampleComponent); //error mesage
        }
      };
    }

    //admin login
    else if(this.lgin.name =='admin' && this.lgin.password == 'admin'){
      this.router.navigate(['/admin/home'], home);
      this.id = this.lgin.password;
    }
    
    else{
      this.dialog.open(DialogExampleComponent); //error mesage
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