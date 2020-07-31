import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { Login } from '../login';
import { SubjectsService } from '../subjects.service';
import { SubjectCreate } from '../create-subject';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-stdnt-home',
  templateUrl: './stdnt-home.component.html',
  styleUrls: ['./stdnt-home.component.css']
})
export class StdntHomeComponent implements OnInit {

  subjects ;//variable to store subject details
  users : Login[]; // store user data
  public id ="";// store id
  public sid : ""; //sore subject id

  constructor(
    private router: Router,
    private loginservice : LoginServiceService,
    private subjectservice: SubjectsService,
    private formBuilder : FormBuilder,
  ) { }

  add: FormGroup;
  
  ngOnInit() {
    //console.log(this.loginservice.getog());
    this.id = localStorage.getItem("id");
    this.loginservice.user_student()
    .subscribe((data : Login[] ) => {
      this.users = data; //user store the data from user table
    });

    console.log(this.subjectservice.viewsubjects());
    this.subjectservice.viewsubjects()
    .subscribe((data: SubjectCreate[])=>{
      this.subjects = data
    });//subject details

    console.log(this.id);
    this.add = this.formBuilder.group({
      stuid: [this.id],
      subid: [this.sid],

    });

  }
  
  //sign out and reach login
  signout(login){
    
    this.router.navigate(['/login'], login)
  };

  //update profile
  update(profile){
    this.router.navigate(['/login'], profile)
  }

  //enroll to a subject
  enroll(subject) :void{
    
    this.sid = subject.Sub_ID;
    //this.enrolstudent();
    console.log(this.id);
    this.subjectservice.enrollsubjects(subject.Sub_ID,this.id)
     .subscribe(data =>console.log('success!',data))
     //console.log(this.add.value);
    
  }

  // public enrolstudent(){
  //   this.subjectservice.enrollsubjects(this.add.value,t)
  //    .subscribe(data =>console.log('success!',data))
  //    console.log(this.add.value);
  // };
}

