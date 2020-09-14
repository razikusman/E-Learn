import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Login } from '../login';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users : Login[]; // aray to store the user information
  public id = "";
  // public name = "";
  constructor(
    private router : Router,
    private loginservice : LoginServiceService) { }

  lgin = new Login(null,null,null,null); //taking the inputs into a format
  //dt : Login[]
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
      console.log(this.lgin.password.value.length);
        //validating
        if(this.lgin.name == this.users[x].name && this.lgin.password ==  this.users[x].password){
  
          //student login
          if(this.users[x].type == "Student"){
            this.router.navigate(['/student/home'], home);
            this.loginservice.setlog(this.users[x].name);//pass id to hme page

            localStorage.setItem("id", this.users[x].name);
            localStorage.setItem("type", this.users[x].type);
          }
          
  
          //parent login
          else if(this.users[x].type == "Parent"){
            this.router.navigate(['/parent/home'], home);
            this.loginservice.setlog(this.users[x].name);//pass id to hme page

            localStorage.setItem("id", this.users[x].name);
            localStorage.setItem("type", this.users[x].type);
          }
  
          //teacher login
          else if(this.users[x].type == "Teacher"){
            this.router.navigate(['/teacher/home'], home);
            this.loginservice.setlog(this.users[x].name);//pass id to hme page

            localStorage.setItem("id", this.users[x].name);
            localStorage.setItem("type", this.users[x].type);
          }
          return x = x;
        }

        //lgin error
        // else if(x == this.users.length - 1){
        //   this.dialog.open(DialogExampleComponent); //error mesage
        // }
      };

    } //login user end

    //admin login
    else if(this.lgin.name =='admin' && this.lgin.password == 'admin'){
      this.router.navigate(['/admin/home'], home);
      this.id = this.lgin.password;
    }
    
    // else{
    //   this.dialog.open(DialogExampleComponent); //error mesage
    // }
  } //login end

  //direct to the signup user type 
  create(crete){
    this.router.navigate(['/create'], crete);
  }
  
  //direct to the about interface
  about(about){
    this.router.navigate(['/about'], about)
  }

}